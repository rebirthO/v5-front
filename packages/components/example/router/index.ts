import { createRouter, createWebHashHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    window.scrollTo({ top: savedPosition?.top ?? 0 })
  }
})

export default router
