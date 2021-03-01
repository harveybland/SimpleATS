<template>
  <div>
    <div class="header">
        <h2 class="pt-3 pb-3 mb-5">Emend Vacancy</h2>
    </div>
    <div class="container">
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
      <b-button class="mt-3" variant="info" @click.prevent="editVacancy(item._id)">Update</b-button>
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
let id = "";

import { HttpService } from "@/services/http.service";
export default {
  name: "editVacancy",
  data() {
    return {
      arrayItem: jobArray,
    };
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    },
    editVacancy() {
      this.id = this.$router.currentRoute.params.id;
      HttpService.httpPut("updateJob/" + this.id)
      .then(res => {
        this.jobArray = res
      })
    }

    },
    beforeMount() {
    this.getJob();
  }
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