import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "../views/Main.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import Project from "../views/Project.vue"

const routes = [
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

    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    //     alias: '/',
    // },
    // {
    //     path: '/forget',
    //     name: 'Forget',
    //     component: Forget,
    //     meta: {cantEnter: true}
    // },
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: Dashboard,
    //     beforeEnter() {
    //         console.log('beforeEnter');
    //     }
    // },
    // {
    //     path: '/mail',
    //     name: 'email',
    //     component: Mail,
    //     children: [
    //         {
    //           path: ':mailId?', component: AppEmailBody, props: true
    //         }
    //     ],
    // },
    // {
    //     path: '/:notFound(.*)',
    //     component: NotFound
    // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router