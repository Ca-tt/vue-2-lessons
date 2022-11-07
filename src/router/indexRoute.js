import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/TestView.vue'
import TextGenerator from './../js/text-generator/TextGenerator.vue'
import TodoApp from './../js/todo-list/TodoApp.vue'
import CardsView from '../views/CardsView.vue';

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
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/js/text-generator',
    name: 'text-generator',
    component: TextGenerator
  },
  {
    path: '/js/todo-list',
    name: 'todo-list',
    component: TodoApp
  },
  {
    path: '/js/cards',
    name: 'cards',
    component: CardsView
  },
]

const router = new VueRouter({
  routes
})

export default router
