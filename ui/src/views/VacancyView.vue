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
let job = { vacancyTitle: "test" };
let id = "";

import axios from 'axios';
import { HttpService } from "@/services/http.service";

export default {
  name: "Vacancy",
  data() {
    return {
      arrayItem: job,
    };
  },

   methods: {
      async getJob() {
        this.id = this.$router.currentRoute.params.id;
        const res = await HttpService.httpGet("job/" + this.id);
        job = res;
    }
  },

   beforeMount() {
    this.getJob();
  },


  // mounted() {
  //   axios.get('http://localhost:4000/api/job/' + this.id)
  //   .then((res) => {
  //     this.job = res.data.id;
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // },

  // created() {
  //    axios.get("http://localhost:4000/api/job/" + this.id)
  //    .then((res) => {
  //      this.id = res.data;
  //      console.log(this.id)
  //    }).catch(error => {
  //      console.log(error)
  //      this.error = true
  //    })
  //   }
  }
      // I have got the id from the url
    // next step is to call the get job endpoint /api/job/{id}
    // and fill the data 
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