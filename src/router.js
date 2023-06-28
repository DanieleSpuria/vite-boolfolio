import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue'
import Project from './pages/Project.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/project/:slug',
      name: 'project',
      component: Project
    }
  ]
})

export {router};