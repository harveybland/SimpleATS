<template>
  <div>
       <div class="header mb-4">
        <div class="vac">
            <li>
            <h5>{{ arrayItem.vacancyTitle }}</h5>
            <p>{{ arrayItem.companyName }} - {{ arrayItem.town }}</p>
          </li>
        </div>
    </div>
    <li>
        <div class="banner">
          <router-link to="/Vacancies"><b-icon-arrow-up rotate="-90"></b-icon-arrow-up></router-link>
          <router-link :to="{ path: '/Vacancies/' + arrayItem._id }">Details</router-link>
          <router-link :to="{ path: '/editVacancy/' + arrayItem._id }">Job Description</router-link>
          <router-link :to="{ path: '/NewApplicant/' + arrayItem._id }" >Application Form</router-link>
           <router-link :to="{ path: '/ApplicantsView/' + arrayItem._id }" >Applicants</router-link>
        </div>
        </li>
    <div class="container">
      <li>
        <div class="head">
          <h4>Description</h4>
      </div>
      <div class="contain animate__animated animate__fadeInUp animate__slow">
      <b-form-group>
            <label>Vacancy Title</label>
            <b-form-input v-model="arrayItem.vacancyTitle"></b-form-input>
        </b-form-group>
        <b-form-group>
                <label>Company Name</label>
                <b-form-input v-model="arrayItem.companyName"></b-form-input>
          </b-form-group>
          <b-form-group>
              <label>Salary</label>
              <b-form-input v-model="arrayItem.salary"></b-form-input>
          </b-form-group>

            <b-form-group>
              <label>Street</label>
              <b-form-input v-model="arrayItem.street"></b-form-input>
          </b-form-group>

            <b-form-group>
              <label>Town</label>
              <b-form-input v-model="arrayItem.town"></b-form-input>
          </b-form-group>

            <b-form-group>
              <label>City</label>
              <b-form-input v-model="arrayItem.city"></b-form-input>
          </b-form-group>

            <b-form-group>
              <label>Postcode</label>
              <b-form-input v-model="arrayItem.postcode"></b-form-input>
          </b-form-group>
      <b-button variant="info" @click.prevent="editVacancy(arrayItem._id)">Save</b-button>
      </div>
        </li>
      </div>
  </div>
</template>
<script>

let job = { vacancyTitle: "test" }
let id = "";

import { HttpService } from "@/services/http.service";
export default {
  name: "editVacancy",
  data() {
    return {
      arrayItem: {
        vacancyTitle: '',
        companyName: '',
        salary: '',
        street: '',
        town: '',
        city: '',
        postcode: '',
        arrayItem: job,
      }
    }
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    },
    editVacancy() {
      const body = { vacancyTitle: this.$data.arrayItem.vacancyTitle, companyName: this.$data.arrayItem.companyName,
      street: this.$data.arrayItem.street, salary: this.$data.arrayItem.salary, town: this.$data.arrayItem.town,
      city: this.$data.arrayItem.city, postcode: this.$data.arrayItem.postcode };
      this.id = this.$router.currentRoute.params.id;
      HttpService.httpPut("updateJob/" + this.id, body)
      .then(res => {
        console.log(res);
        this.$router.push('/Vacancies');
      })
    }

    },
    beforeMount() {
    this.getJob();
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';
 label {
   display: flex;
 }
.contain {
    margin: 20px 100px 20px 100px;
}
</style>