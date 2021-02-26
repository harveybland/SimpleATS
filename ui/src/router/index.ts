import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Vacancies from '@/views/Vacancies.vue'
import Vacancy from '@/views/VacancyView.vue'
import Login from '@/views/Login.vue'
import Account from '@/views/Account.vue'
import NewVacancy from '@/views/NewVacancy.vue'
import editVacancy from '@/views/editVacancy.vue'
import Applicants from '@/views/Applicants.vue'

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/home',
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
  },
  {
    path: '/NewVacancy',
    component: NewVacancy
  },
  {
    path: '/editVacancy/:id',
    component: editVacancy
  },
  {
  path: '/Applicants',
  component: Applicants
  }
];

const router = new VueRouter({
  routes,
});

export default router;
