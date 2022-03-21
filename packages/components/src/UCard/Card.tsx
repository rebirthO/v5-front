import type { CardProps } from 'naive-ui'
import { NCard } from 'naive-ui'
import { defineComponent, PropType } from 'vue'

export type UCardPropsType = CardProps

const UCard = defineComponent({
  name: 'UCard',
  extends: NCard,
  props: {
    size: {
      type: String as PropType<CardProps['size']>,
      default: 'huge'
    }
  },
  setup(props, ctx) {
    return () => <NCard {...props} v-slots={ctx.slots} />
  }
})

export default UCard