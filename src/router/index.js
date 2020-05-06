import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login.vue'
const login = () => import('@/components/login.vue')
const index = () => import('@/components/index.vue')
const home = () => import('@/components/user/home.vue')
const agreement = () => import('@/components/user/agreement.vue')
const userdetail = () => import('@/components/user/userdetail.vue')
const feedback = () => import('@/components/user/feedback.vue')
const feeddesc = () => import('@/components/user/feeddesc.vue')
const phoneapply = () => import('@/components/user/phoneapply.vue')
const agreementsetup = () => import('@/components/user/agreementsetup.vue')
const phoneapplydetail = () => import('@/components/user/phoneapplydetail.vue')
const edition = () => import('@/components/configure/edition.vue')
const addedition = () => import('@/components/configure/addedition.vue')
const adminlist = () => import('@/components/admin/adminlist.vue')
const addsystemuser = () => import('@/components/admin/addsystemuser.vue')


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [{
          path: '/user/home',
          name: 'home',
          component: home,
        },
        {
          path: '/user/userdetail/:id',
          name: 'userdetail',
          component: userdetail,
        },
        {
          path: '/user/feedback',
          name: 'feedback',
          component: feedback,
        },
        {
          path: '/user/feeddesc/:id',
          name: 'feeddesc',
          component: feeddesc,
        },
        {
          path: '/user/phoneapply',
          name: 'phoneapply',
          component: phoneapply,
        },
        {
          path: '/user/phoneapplydetail/:id',
          name: 'phoneapplydetail',
          component: phoneapplydetail,
        },
        {
          path: '/user/agreement',
          name: 'agreement',
          component: agreement,
        },
        {
          path: '/user/agreementsetup/:id',
          name: 'agreementsetup',
          component: agreementsetup,
        },
        {
          path: '/configure/addedition',
          name: 'addedition',
          component: addedition,
        },
        {
          path: '/configure/edition',
          name: 'edition',
          component: edition,
        },
        {
          path: '/admin/adminlist',
          name: 'adminlist',
          component: adminlist,
        },
        {
          path: '/admin/addsystemuser/:id',
          name: 'addsystemuser',
          component: addsystemuser,
        },
      ]
    },
  ]
})
