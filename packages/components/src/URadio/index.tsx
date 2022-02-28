import { NRadio } from 'naive-ui'
import { defineComponent } from 'vue'

const URadio = defineComponent({
  name: 'URadio',
  extends: NRadio,
  setup(props, ctx) {
    return () => <NRadio {...props}>{ctx.slots.default?.()}</NRadio>
  }
})

export default URadio
