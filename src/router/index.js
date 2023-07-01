import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from  '../views/AboutView.vue'
import ProjectsView from  '../views/ProjectsView.vue'
import ContactView from  '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView

  },  
  {
    path: '/testimonials',
    name: 'testimonials',
    component: ()=>import('@/views/TestimonialsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ()=>import('@/views/ResumeView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router