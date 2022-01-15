import { NInputGroupLabel } from 'naive-ui'
import { defineComponent } from 'vue'
import type { UInputGroupLabelProps } from './interface'
import './styles/input-group-label.css'

export default defineComponent<UInputGroupLabelProps>({
  name: 'UInputLabel',
  setup(props, { slots }) {
    return () => {
      return <NInputGroupLabel {...props}>{slots.default?.()}</NInputGroupLabel>
    }
  }
})
