import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TestChart from '@/components/TestChart'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path: '/testchart',
          name: 'TestChart',
          component: TestChart
        }
      ]
    }
  ]
})
