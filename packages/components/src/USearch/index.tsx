import { NInput } from 'naive-ui'
import type { InputProps } from 'naive-ui'
import { defineComponent } from 'vue'
import { SearchOutlined } from '@comunion/icons'
import './index.css'

export type USearchProps = InputProps

const USearch = defineComponent({
  extends: NInput,
  setup(props) {
    return () => (
      <NInput {...props} class="u-search" placeholder={props.placeholder || 'Search'}>
        {{
          prefix: () => <SearchOutlined class="u-search-prefix" />
        }}
      </NInput>
    )
  }
})

export default USearch
