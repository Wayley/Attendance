import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/CourseView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/MineView.vue')
    },
    {
      path: '/record',
      name: 'record',
      children: [
        {
          path: '/add',
          name: 'record.add',
          component: () => import('../views/Record/RecordAdd.vue')
        }
      ]
    }
  ]
})

export default router
