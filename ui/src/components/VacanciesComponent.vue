<template>
<div class="background">
    <div class="container">
        <b-card bg-variant="dark" text-variant="white">
        <b-card-text>
            <li v-for="item in arrayItem" v-bind:key="item.vacancyTitle">
            {{ item.vacancyTitle }}<br />
            {{ item.companyName }}<br />
            {{ item.city }}</li>
        </b-card-text>
        </b-card>
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
  border-bottom: solid 1px #fff;
}
</style>