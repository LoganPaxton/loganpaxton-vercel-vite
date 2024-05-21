import { createRouter } from 'vue-router'
import Blog from './componets/Blog.vue'

const router = createRouter({
  history: true,
  routes: [
    { path: '/', componet: Blog }
  ]
})

export default router
