<template>
  <div>
    <div class="header mb-4">
      <div class="vac">
        <router-link to="/Vacancies">View</router-link>
        <router-link to="/NewVacancy">Create</router-link>
      </div>
    </div>
    <div class="container">
      <li v-for="item in arrayItem" v-bind:key="item._id">
        <div>
            <h5>{{ item.vacancyTitle }}</h5>
          <p>{{ item.companyName }} - {{ item.city }} - {{ item.town }}</p>
        </div>
        <div>
          <router-link :to="{ path: '/Vacancies/' + item._id }" class="nav">
            <h6>More details <b-icon-arrow-up rotate="90"></b-icon-arrow-up></h6>
          </router-link>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
let jobArray = [
  {
    vacancyTitle: "test",
  },
];
import { HttpService } from "@/services/http.service";
import gsap from 'gsap'
export default {
  name: "Vacancies",
  data() {
    return {
      arrayItem: jobArray,
    };
  },
  methods: {
    async getJobs() {
      const res = await HttpService.httpGet("jobs");
      jobArray.splice(0, jobArray.length);
      jobArray.push(...res);
    }
    },
      beforeMount() {
        this.getJobs();
    },
};
</script>

<style scoped>
  .header {
    padding: 0 40px
  }
  .vac {
    display: flex;
    justify-content: end;
    padding-top: 10px;
  }
  .vac a {
    color: #000 !important;
    padding: 15px 10px;
    text-decoration: none;
  }
  .vac a:hover{
    background: #fff;
    opacity: 0.7;
    transition: .7s;
  }
  a.router-link-active {
    background: #fff;
    padding: 15px 10px;
    color: #000 !important;
  }
  li {
    display: flex;
    justify-content: space-between;
    background: #343a40;
    align-items: center;
    padding: 25px 25px 15px 25px;
    margin-bottom: 20px;
  }
  h5 {
    text-align: left;
    color: #e5e5e5;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
  }
</style>