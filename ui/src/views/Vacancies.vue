<template>
  <div class="background">
    <div class="container">
      <div class="mb-4 pt-3">
        <h2>Vacancies</h2>
      </div>
      <li v-for="item in arrayItem" v-bind:key="item.vacancyTitle">
        <router-link :to="{ path: '/Vacancies/' + item._id }" class="nav">
          <h5>{{ item.vacancyTitle }}</h5>
        </router-link>
        <p>{{ item.street }} {{ item.city }} {{ item.town }}</p>
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
      this.data = res;
      jobArray.splice(0, jobArray.length);
      jobArray.push(...res);
    },
  },
  beforeMount() {
    this.getJobs();
  },
};
</script>

<style scoped>
.background {
  background: grey;
}
li {
  display: block;
  background: #343a40;
  padding: 25px 25px 15px 25px;
  margin-bottom: 20px;
}
h5 {
  color: #e5e5e5;
}
p {
  color: rgba(255, 255, 255, 0.5);
}
.container {
  background: grey;
  padding-bottom: 10px;
}
</style>