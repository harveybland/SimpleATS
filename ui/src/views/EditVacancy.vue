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
    <ul class="container">
      <li>
        <div class="head">
          <h4>Description</h4>
      </div>
      <div class="contain">
      <b-form-group class="box">
            <label>Vacancy Title</label>
            <b-form-input v-model="arrayItem.vacancyTitle"></b-form-input>
        </b-form-group>
        <b-form-group class="box">
                <label>Company Name</label>
                <b-form-input v-model="arrayItem.companyName"></b-form-input>
          </b-form-group>
          <b-form-group class="box">
              <label>Salary</label>
              <b-form-input v-model="arrayItem.salary"></b-form-input>
          </b-form-group>

            <b-form-group class="box">
              <label>Street</label>
              <b-form-input v-model="arrayItem.street"></b-form-input>
          </b-form-group>

            <b-form-group class="box">
              <label>Town</label>
              <b-form-input v-model="arrayItem.town"></b-form-input>
          </b-form-group>

            <b-form-group class="box">
              <label>City</label>
              <b-form-input v-model="arrayItem.city"></b-form-input>
          </b-form-group>
            <b-form-group class="box">
              <label>Postcode</label>
              <b-form-input v-model="arrayItem.postcode"></b-form-input>
          </b-form-group>
      <b-button class="box" variant="info" @click.prevent="editVacancy(arrayItem._id)">Save</b-button>
      </div>
        </li>
      </ul>
  </div>
</template>
<script>

let job = { vacancyTitle: "test" }
let id = "";
import { gsap } from "gsap";
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
        console.log(body);
        this.$router.push('/Vacancies');
      })
    }

    },
    beforeMount() {
    this.getJob();
  },
      mounted() {
      gsap.from(".box", {
      duration: 0.5,
      scale: 0.2, 
      opacity: 0, 
      stagger: 0.1,
    })
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