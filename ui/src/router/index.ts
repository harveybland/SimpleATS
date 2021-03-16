import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/Home.vue';
import Vacancies from '@/views/Vacancies.vue'
import ClosedJobs from '@/views/ClosedJobs.vue'
import Vacancy from '@/views/VacancyView.vue'
import Login from '@/views/Login.vue'
import Account from '@/views/Account.vue'
import NewVacancy from '@/views/NewVacancy.vue'
import NewApplicant from '@/views/NewApplicant.vue'
import editVacancy from '@/views/editVacancy.vue'
import ApplicantsView from '@/views/ApplicantsView.vue'
import ApplicantProgress from '@/views/ApplicantProgress.vue'
import ApplicantReject from '@/views/ApplicantReject.vue'

import Search from '@/views/Search.vue'

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
    path: '/Vacancies/ClosedJobs',
    component: ClosedJobs
  },
  {
    path: "/Vacancies/:id",
    component: Vacancy
  },
  {
    path: '/editVacancy/:id',
    component: editVacancy
  },
  {
    path: '/NewApplicant/:id',
    component: NewApplicant
  },
  {
    path: '/ApplicantsView/:id',
    component: ApplicantsView
  },
  {
    path: '/ApplicantProgress/:id',
    component: ApplicantProgress
  },
  {
    path: '/ApplicantReject/:id',
    component: ApplicantReject
  },
  {
    path: '/NewVacancy',
    component: NewVacancy
  },
  {
    path: '/Search',
    component: Search
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
