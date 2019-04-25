import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const myRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/workspace/index',
    name: 'workspace'
  },
  {
    path: '/workspace',
    component: Layout,
    redirect: '/workspace/index',
    name: 'workspace',
    children: [
      {
        path: 'index',
        component: () => import('@/views/project/index'),
        name: 'index',
        meta: { title: 'index', icon: 'dashboard', noCache: true }
      }, {
        path: 'lottie',
        component: () => import('@/views/project/lottie'),
        name: 'lottie',
        meta: { title: 'lottie', icon: 'dashboard', noCache: true }
      }, {
        path: 'canvasDemo',
        component: () => import('@/views/project/canvas'),
        name: 'canvasDemo',
        meta: { title: 'canvasDemo', icon: 'dashboard', noCache: true }
      }, {
        path: 'threeDemo',
        component: () => import('@/views/project/three'),
        name: 'threeDemo',
        meta: { title: 'threeDemo', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  routes: myRouterMap
})
