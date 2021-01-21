import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Vacancies from '@/views/Vacancies.vue'
import Vacancy from '@/views/VacancyView.vue'
import Login from '@/views/Login.vue'
import Account from '@/views/Account.vue'

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/Vacancies",
    component: Vacancies
  },
  {
    path: "/Vacancies/:id",
    component: Vacancy
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Account',
    component: Account
  }
];

const router = new VueRouter({
  routes,
});

export default router;
