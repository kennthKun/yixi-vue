import Vue from 'vue'
import Router from 'vue-router'
import content from '@/view/content'
import special from '@/view/special'
import speech from '@/view/speech'
import activity from '@/view/activity'
import record from '@/view/record'
import gifts from '@/view/gifts'
import about from '@/view/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    },
    {
    		path: '/special',
    		name: 'special',
    		component: special
    },
    {
    		path: '/speech',
    		name: 'speech',
    		component: speech
    },
    {
    		path: '/activity',
    		name: 'activity',
    		component: activity
    },
    {
    		path: '/record',
    		name: 'record',
    		component: record
    },
    {
    		path: '/gifts',
    		name: 'gifts',
    		component: gifts
    },
    {
    		path: '/about',
    		name: 'about',
    		component: about
    }
  ]
})
