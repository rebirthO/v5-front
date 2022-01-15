import { NInput } from 'naive-ui'
import { defineComponent } from 'vue'
import type { UInputProps } from './interface'
import './styles/input.css'

export default defineComponent<UInputProps>({
  name: 'UInput',
  setup(props) {
    return () => {
      return <NInput {...props} />
    }
  }
})
