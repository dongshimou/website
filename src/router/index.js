import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'

import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Post from '@/components/Post'

Vue.use(resource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path:'/posts/:title',
      name:'Post',
      component:Post
    },
    {
      path:'/posts',
      name:'Posts',
      component:Posts
    }
  ]
})
