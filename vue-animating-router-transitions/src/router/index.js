import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Guide from '../components/Guide.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        enterCLass: 'animate__animated animate__fadeInLeft',
        leaveCLass: 'animate__animated animate__fadeOutRight',
      }
    }, 
    {
      path: '/guide',
      component: Guide,
      meta: {
        enterCLass: 'animate__animated animate__fadeInRight',
        leaveCLass: 'animate__animated animate__fadeOutLeft',
      }
    }
  ]
})

export default router