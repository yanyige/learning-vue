import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ratings from '@/components/Ratings'
import Goods from '@/components/Goods'
import Seller from '@/components/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
