import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Main from "@/views/Main.vue"
import About from "@/views/About.vue"
import Contact from "@/views/Contact.vue"
import Project from "@/views/Project.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
      path: '/contact',
      name: 'contact',
      component: Contact
  },
  {
    path: '/about_me',
    name: 'about',
    component: About
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})



export default router