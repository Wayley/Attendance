import { createRouter, createWebHistory } from 'vue-router'
import RecordHome from '@/views/Record/RecordHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecordHome
    },
    /* ***************************** Record Module ***************************** */
    {
      path: '/record',
      name: 'record',
      component: RecordHome
    },
    {
      path: '/record/add',
      name: 'record.add',
      component: () => import('../views/Record/RecordAdd.vue')
    },
    /* ***************************** Course Module ***************************** */
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/Course/CourseHome.vue')
    },
    /* ***************************** News Module ***************************** */
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News/NewsHome.vue')
    },
    /* ***************************** User Module ***************************** */
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/User/UserHome.vue')
    }
  ]
})

export default router
