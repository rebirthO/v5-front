import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { UConfigProvider } from '@/comps/index'

export default defineComponent({
  setup() {
    return () => {
      return (
        <UConfigProvider>
          <RouterView></RouterView>
        </UConfigProvider>
      )
    }
  }
})
