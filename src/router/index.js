import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods'
import Ratings from '@/components/Ratings'
import Sell from '@/components/Sell'
import axios from 'axios'

Vue.use(Router)

Vue.use(axios)

export default new Router({
  routes: [
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path:'/Ratings',
      name:'Ratings',
      component:Ratings
    },
    {
      path:'/Sell',
      name:'Sell',
      component:Sell
    }
  ]
})

