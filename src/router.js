import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //开启history模式需要后端配合
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/training',
      name: 'Training',
      component: () => import('./views/Training.vue')
    },
    {
      path: '/activity',
      name: 'Activity',
      component: () => import('./views/Activity.vue'),
      redirect: {name: 'Smile'},
      children: [
        {
          path: 'smile',
          name: 'Smile',
          component: () => import('./components/Smile.vue')
        },
        {
          path: 'wenda/:class/:page',
          name: 'WenDa',
          component: () => import('./components/WenDa.vue')
        },
        {
          path: 'wenda',
          redirect: 'wenda/all/1'
        }
      ]
    },
    {
      path: '/data',
      name: 'Data',
      component: () => import('./views/Data.vue')
    },
    {
      path: '/raiders',
      name: 'Raiders',
      component: () => import('./views/Raiders.vue')
    },
    {
      path: '/style',
      name: 'Style',
      component: () => import('./views/Style.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})
