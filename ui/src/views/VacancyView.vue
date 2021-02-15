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
        <b-button variant="info mr-3" @click.prevent="editVacancy">Edit</b-button>
        <b-button variant="danger" @click.prevent="removeVacancy">Remove</b-button>
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
      const vac = await HttpService.httpGet("job/" + this.id)
      this.arrayItem = vac;
    },
    removeVacancy() {
      HttpService.httpDelete("job/" + this.$route.params.id)
      .then(res => {
        this.job = res
        // this.$router.push('/Vacancies')
      })
    },

    editVacancy() {
      HttpService.httpPut("job/" + this.id)
      .then(res => {
        
      })
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
</style>