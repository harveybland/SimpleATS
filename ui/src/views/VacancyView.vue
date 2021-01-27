<template>
  <div class="background">
    <div class="container">
      <div class="mb-4 pt-3">
        <h2>Load the Vacancy</h2>
      </div>
      <li v-for="item in arrayItem" v-bind:key="item.vacancyTitle">
        <h5>{{ item.vacancyTitle }}</h5>
        <p>{{ item.street }} {{ item.city }}</p>
        <p>{{ item.town }} {{ item.postcode }}</p>
      </li>
    </div>
  </div>
</template>

<script>
let jobArray = { vacancyTitle: "test" };
let id = "";

import axios from 'axios';
import { HttpService } from "@/services/http.service";

export default {
  name: "Vacancy",
  data() {
    return {
      arrayItem: jobArray,
    };
  },
   methods: {
    async getJob() {
      const vac = await HttpService.httpGet("job/" + this.id);
      this.id = this.$router.currentRoute.params.id;
      
    }

    // async getJob(id) {
    //   let vac = await axios.get("http://localhost:4000/api/job/" + this.id);
    //   return vac.data;
    // }
  },
  
   beforeMount() {
    this.getJob();
  },

    // I have got the id from the url
    // next step is to call the get job endpoint /api/job/{id}
    // and fill the data 

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