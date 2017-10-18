import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'

import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Resume from '@/components/Resume'
import Http404 from '@/components/Http404'
import Button from '@/components/Button'

// import N3Components from 'N3-components'
// import 'N3-components/dist/index.min.css'
// Vue.use(N3Components)

Vue.use(resource)
Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path:'/static/posts/:id',
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
    },
    {
      path:'/*',
      name:'http404',
      component:Http404
    },
    {
      path:'/test',
      name:'test',
      component:Button
    }
  ]
})
