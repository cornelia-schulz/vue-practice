import Vue from 'vue'
import Router from 'vue-router'
import Child from '@/components/Child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Child',
      component: Child
    }
  ]
})
