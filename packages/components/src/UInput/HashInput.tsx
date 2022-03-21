import { debounce } from '@comunion/utils'
import { NSelect, SelectProps } from 'naive-ui'
import type { SelectBaseOption } from 'naive-ui/lib/select/src/interface'
import type { InjectionKey, PropType } from 'vue'
import { provide, inject, defineComponent, ref } from 'vue'

export type UHashInputOnSearch = (
  value: string,
  category: string
) => Promise<{ label: string; value: string | number }[]>

export interface UHashInputState {
  onSearch: UHashInputOnSearch
}

export const UHashInputSymbol: InjectionKey<UHashInputState> = Symbol()

export type UHashInputPropsType = SelectProps

const UHashInput = defineComponent({
  name: 'UHashInput',
  extends: NSelect,
  props: {
    category: {
      type: String as PropType<'comerSkill' | 'startup' | 'bounty'>,
      required: true
    },
    size: {
      type: String as PropType<SelectProps['size']>,
      default: 'large'
    }
  },
  setup(props) {
    const loading = ref(false)
    const options = ref<SelectBaseOption[]>([])

    const hashInputState = inject(UHashInputSymbol)
    if (!hashInputState) {
      throw new Error('UHashInput must be used in UHashInputProvider')
    }

    const doSearch = debounce(async (inputValue: string) => {
      if (!inputValue) {
        options.value = []
        return
      }
      loading.value = true
      const result = await hashInputState.onSearch?.(inputValue, props.category)
      if (result.some(item => item.value === inputValue)) {
        options.value = result
      } else {
        options.value = [...result, { label: `#${inputValue}#(new)`, value: inputValue }]
      }
      loading.value = false
    }, 500)

    return () => (
      <NSelect
        // @ts-ignore
        {...props}
        placeholder="#UI design#  #UX design#"
        consistentMenuWidth={false}
        clearable
        loading={loading.value}
        maxTagCount={props.maxTagCount ?? 5}
        multiple
        remote
        options={options.value}
        // renderLabel={({ option }: { option: SelectOption }) =>
        //   option.label.toString().replace(/^#/, '').replace(/#$/, '')
        // }
        // renderOption={({ option }: { option: SelectOption }) => `#${option.value}#`}
        tag
        filterable
        onSearch={doSearch}
      />
    )
  }
})

export default UHashInput

export const UHashInputProvider = defineComponent({
  name: 'UHashInputProvider',
  props: {
    onSearch: {
      type: Function as PropType<UHashInputOnSearch>,
      required: true
    }
  },
  setup(props, ctx) {
    provide(UHashInputSymbol, { onSearch: props.onSearch })
    return () => ctx.slots.default?.()
  }
})