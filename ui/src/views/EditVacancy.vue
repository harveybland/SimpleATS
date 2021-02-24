<template>
  <div class="background">
    <div class="container">
      <div class="mb-4 pt-3">
        <h2>Edit Vacancy</h2>
      </div>
      <li v-for="item in arrayItem" v-bind:key="item._id">
      <b-form-group>
            <label>Vacancy Title</label>
            <b-form-input v-model="item.vacancyTitle"></b-form-input>
        </b-form-group>
        <b-form-group>
                <label>Company Name</label>
                <b-form-input v-model="item.companyName"></b-form-input>
            </b-form-group>
                         <b-form-group>
                <label>Salary</label>
                <b-form-input v-model="item.salary"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Street</label>
                <b-form-input v-model="item.street"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Town</label>
                <b-form-input v-model="item.town"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>City</label>
                <b-form-input v-model="item.city"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Postcode</label>
                <b-form-input v-model="item.postcode"></b-form-input>
            </b-form-group>
      <b-button class="mt-3" variant="info" @click.prevent="editVacancy">Update</b-button>
      </li>
    </div>
  </div>
</template>
<script>

let job = { vacancyTitle: "test" };
let id = "";

import { HttpService } from "@/services/http.service";
export default {
  name: "editVacancy",
  data() {
    return {
      arrayItem: job,
    };
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    },
    editVacancy() {
      this.id = this.$router.currentRoute.params.id;
      HttpService.httpPut("job/" + this.id)
      .then(res => {
        const newVac = res.data.id;
        console.log(newVac)
      })
      .catch(err => {
        console.log(err)
      })
    }
    },
    beforeMount() {
    this.getJob();
  },

};
</script>

<style scoped>
  label {
      display: flex;
      color: rgba(255, 255, 255, 0.5)!important;
  }
  .form-control {
        background-color: #fff !important;
  }
  li {
    display: block;
    background: #343a40;
    padding: 25px 25px 15px 25px;
    margin-bottom: 20px;
  }
</style>