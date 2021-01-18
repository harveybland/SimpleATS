import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import VacanciesView from '../views/VacanciesView.vue'
import LoginView from '../views/LoginView.vue'
import AccountView from '../views/AccountView.vue'


Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      component: HomeView
    },
    {
        path: "/Vacancies",
        component: VacanciesView 
    },
    {
      path:  '/LoginView',
      component: LoginView
    },
     {
       path: '/AccountView',
       component: AccountView
     }
  ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;