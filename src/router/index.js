import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import TextGenerator from '../views/js/text-generator/TextGenerator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/js/text-generator',
    name: 'text-generator',
    component: TextGenerator
  },
]

const router = new VueRouter({
  routes
})

export default router
