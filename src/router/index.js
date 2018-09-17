import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Detail from '@/pages/detail/detail'
import shoppingList from '@/pages/shoppingList/shoppingList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'goodDetail',
      component: Detail
    },
    {
      path: '/shoppingList',
      name: 'shoppingList',
      component: shoppingList
    }
  ]
})
