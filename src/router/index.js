import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'Recommend',
      component: () => import('components/recommend/Recommend')
    }, {
      path: '/rank',
      name: 'Rank',
      component: () => import('components/rank/Rank')
    }, {
      path: '/singer',
      name: 'Singer',
      component: () => import('components/singer/Singer'),
      children: [
        {
          path: ':id',
          component: () => import('components/singer-detail/SingerDetail')
        }
      ]
    }, {
      path: '/search',
      name: 'Search',
      component: () => import('components/search/Search')
    }
  ]
})
