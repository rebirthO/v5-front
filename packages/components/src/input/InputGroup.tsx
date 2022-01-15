import { NInputGroup } from 'naive-ui'
import { defineComponent } from 'vue'
import type { UInputGroupProps } from './interface'
import './styles/input-group.css'

export default defineComponent<UInputGroupProps>({
  name: 'UInputLabel',
  setup(props, { slots }) {
    return () => {
      return <NInputGroup {...props}>{slots.default?.()}</NInputGroup>
    }
  }
})
