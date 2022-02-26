import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import { StyleProvider, UHashInputProvider } from '@/comps/index'

interface IProps {}

const onHashSearch = (value: string) => {
  return new Promise<{ label: string; value: string }[]>(resolve => {
    resolve(
      Array.from({ length: value.length }).map((_, i) => ({
        label: `#${value}_${i}#`,
        value: `${value}_${i}`
      }))
    )
  })
}

export default defineComponent<IProps>({
  setup() {
    return () => {
      return (
        <StyleProvider>
          <UHashInputProvider onSearch={onHashSearch}>
            <RouterView></RouterView>
          </UHashInputProvider>
        </StyleProvider>
      )
    }
  }
})
