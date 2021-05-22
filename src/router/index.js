import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/home')
  },
  {
    path: '/category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('views/category/category')
  },
  {
    path: '/shopcart',
    component: () => import('views/shopcart/shopcart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/profile')
  },
  {
    path: '/detail/:iid',
    component: () => import('views/detail/Detail')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
