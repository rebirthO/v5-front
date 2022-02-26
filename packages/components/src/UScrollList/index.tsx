import type { PropType } from 'vue'
import { watch } from 'vue'
import { defineComponent, ref, toRefs, computed } from 'vue'

import ULoadMore from './ULoadMore'

import './index.css'

const scrollListProps = {
  pageSize: {
    type: Number,
    required: true,
    default: 20
  },
  page: {
    type: Number,
    required: true,
    default: 1
  },
  total: {
    type: Number,
    required: true,
    default: 0
  },
  moreTriggered: {
    type: Boolean,
    required: true,
    default: false
  },
  onLoadMore: {
    type: Function as PropType<(page: number) => void>,
    required: true
  },
  triggerThreshold: {
    type: Number,
    default: 60
  },
  loadingText: String,
  noMoreText: String
} as const

export type UScrollListProps = typeof scrollListProps

const UScrollList = defineComponent({
  name: 'UScrollList',
  props: scrollListProps,
  setup(props, { slots, attrs }) {
    const loadMoreLock = ref<boolean>(false)

    const {
      total,
      page,
      pageSize,
      loadingText,
      noMoreText,
      moreTriggered,
      triggerThreshold,
      onLoadMore
    } = toRefs(props)

    const isLastPage = computed(() => {
      return (page.value || 0) * (pageSize.value || 0) >= (total.value || 0)
    })

    watch(
      () => moreTriggered.value,
      n => {
        if (n === false) {
          loadMoreLock.value = false
        }
      }
    )

    return () => {
      return (
        <div
          class={`u-scroll-list ${attrs?.class || ''}`}
          onScroll={e => {
            const el = e.target as Element
            const invisibleSize = el.scrollHeight - el.clientHeight

            if (loadMoreLock.value) {
              return
            }

            const threshold = triggerThreshold?.value
            if (invisibleSize - el.scrollTop < threshold) {
              loadMoreLock.value = true

              if (!isLastPage.value) {
                onLoadMore.value(page.value + 1)
              }
            }
          }}
        >
          <div>{slots.default?.()}</div>
          {loadMoreLock.value && (
            <ULoadMore
              height={triggerThreshold.value}
              noMore={isLastPage.value}
              noMoreText={noMoreText.value}
              loading={moreTriggered?.value}
              loadingText={loadingText.value}
            />
          )}
        </div>
      )
    }
  }
})

export default UScrollList
