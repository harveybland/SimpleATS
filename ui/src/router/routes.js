import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import VacanciesView from '../views/VacanciesView.vue'
import VacanciesComponent from '../components/VacanciesComponent'

Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      component: HomeView
    },
    {
        path: "/Vacancies",
        component: VacanciesView  ,
        children: [{
            path: "VacanciesComponent",
            name: "VacanciesComponent",
            component: VacanciesComponent
        }]
    }
  ];


  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;