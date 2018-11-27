import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import About from '../components/About'
import Article from '../components/Article'

export default new Router({
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/article',
      component: Article
    }
  ]
})
