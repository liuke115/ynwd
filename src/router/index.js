import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import loginPage from '@/components/loginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginPage
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
