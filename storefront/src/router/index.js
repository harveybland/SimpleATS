import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import VacanciesView from '../views/VacanciesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/VacanciesView/:id',
    name: 'VacanciesView',
    component: VacanciesView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
