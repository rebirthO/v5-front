import { defineComponent } from 'vue'

import { UButton } from '@/comps/index'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="h-full">
          <UButton>Test</UButton>
        </div>
      )
    }
  }
})
