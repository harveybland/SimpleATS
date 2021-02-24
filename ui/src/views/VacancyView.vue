<template>
  <div class="background">
    <div class="container">
      <div class="mb-4 pt-3">
        <h2>Load the Vacancy</h2>
      </div>
      <li v-for="item in arrayItem" v-bind:key="item._id">
        <h5>{{ item.vacancyTitle }}</h5>
        <p>{{ item.street }} {{ item.city }}</p>
        <p>{{ item.town }} {{ item.postcode }}</p>

        <router-link :to="{ path: '/editVacancy/' + item._id }">
        <b-button class="mr-3" variant="info">Edit</b-button>
        </router-link>

        <b-button variant="danger" @click.prevent="deleteVacancy(item._id)">Remove</b-button>
      </li>
    </div>
  </div>
</template>
<script>

let job = { vacancyTitle: "test" };
let id = "";

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
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
      // this.arrayItem = vac;
    },
    deleteVacancy() {
      this.id = this.$router.currentRoute.params.id;
      HttpService.httpDelete("job/" + this.id)
      .then(res => {
        this.arrayItem = res
        this.$router.push('/Vacancies')
      })
    },
       editVacancy() {
       this.$router.push('/EditVacancy')
    }
    },
   beforeMount() {
    this.getJob();
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
a {
    color: #fff;
    text-decoration: none;
}
a:hover {
   color: #fff;
   text-decoration: none;
}
</style>