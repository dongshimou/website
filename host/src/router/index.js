import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'


import Hello from '@/components/Hello'
import Home from '@/components/Home'

Vue.use(resource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name:'home',
      component:Home
    }
  ]
})
