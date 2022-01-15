import { NConfigProvider } from 'naive-ui'
import { defineComponent } from 'vue'
import './index.css'
import type { UConfigProviderProps } from './interface'
import { defaultThemeVars } from '@/comps/theme'
import { merge } from 'lodash-es'

export default defineComponent<UConfigProviderProps>({
  name: 'UConfigProvider',
  setup(props, { slots }) {
    const { themeOverrides, ...restProps } = props
    return () => (
      <NConfigProvider
        {...restProps}
        themeOverrides={merge(defaultThemeVars, themeOverrides || {})}
      >
        {slots.default?.()}
      </NConfigProvider>
    )
  }
})
