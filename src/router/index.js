import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      component:()=>import('../views/FrontView.vue'),
      children:[
        {
          path:'home',
          component: HomeView
        },
        {
          path:'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path:'test',
          component: () => import('../views/TestView.vue')
        },
        {
          path:'products',
          component:()=>import('../views/ProductsView.vue')
        },
        {
          path:'products/:productId',
          component:()=>import('../views/ProductView.vue')
        }
      ]
    },
    {
      path:'/backstage',
      component:()=>import ('../views/backstage/BackView.vue'),
      children:[
        {
          path:'products',
          component:()=>import ('../views/backstage/BackProduct.vue'),
        }
      ]
    }
  ]
})

export default router
