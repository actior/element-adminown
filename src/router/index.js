import Vue from 'vue'
import Router from 'vue-router'
import Plot from '@/components/plot/plot'
import Plotbasic from '@/components/plotbasic/plotbasic'
import Housedata from '@/components/housedata/housedata'
import Index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/plot',
      component: Plot,
    },

    {
      path: '/plotbasic',
      component: Plotbasic
    },
    {
      path: '/housedata',
      component: Housedata
    },
    {
      path:'/',
      component:Index
    }
  ]
})