import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'

import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Resume from '@/components/Resume'

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
      path:'/static/posts/:basename',
      name:'Post',
      component:Post
    },
    {
      path:'/static/posts',
      name:'Posts',
      component:Posts
    },
    {
      path:'/static/resume',
      name:'Resume',
      component:Resume
    }
  ]
})