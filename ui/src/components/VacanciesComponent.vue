<template>
<div class="background">
    <div class="container">
          <li v-for="item in arrayItem" v-bind:key="item.vacancyTitle">
          <h5>{{ item.vacancyTitle }}</h5>
          <p>{{ item.street }} {{ item.city }} {{ item.town }}</p>
          </li>
    </div>
  </div>
</template>

<script>
var jobArray = [
  {
    vacancyTitle: "test",
  },
];
import { getJobListing } from "../services/jobs.service";
export default {
    name: 'VacanciesComponent',
      data() {
    return {
      arrayItem: jobArray,
    };
  },
    methods: {
    async getJobs() {
      const res = await getJobListing();
      this.data = res;
      jobArray.splice(0, jobArray.length);
      jobArray.push(...res);
    },
  },
  beforeMount() {
    this.getJobs();
  }
};
</script>

<style scoped>

.background {
    background: grey;
}
li {
  display: block;
  padding-bottom: 25px;
   background: #343a40 ;
   padding: 25px 25px 20px 25px;
   margin-top: 20px;
}
  h5 {
    color: #e5e5e5;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
  }
</style>