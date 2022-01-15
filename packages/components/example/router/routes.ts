import type { RouteRecordRaw } from 'vue-router'

import Layout from '../layout'
import ButtonExample from '@/example/views/button'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/button',
        component: ButtonExample
      }
    ]
  }
]

export default routes
