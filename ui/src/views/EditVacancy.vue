<template>
  <div>
       <div class="header mb-4">
        <div class="vac">
            <li v-for="item in arrayItem" v-bind:key="item._id">
            <h5>{{ item.vacancyTitle }}</h5>
            <p>{{ item.companyName }} - {{ item.town }}</p>
          </li>
        </div>
    </div>
    <li v-for="item in arrayItem" v-bind:key="item._id">
        <div class="banner">
          <!-- <router-link to="/Vacancies"><b-icon-arrow-up rotate="-90"></b-icon-arrow-up></router-link> -->
          <router-link :to="{ path: '/Vacancies/' + item._id }">Details</router-link>
          <router-link :to="{ path: '/editVacancy/' + item._id }">Job Description</router-link>
          <router-link :to="{ path: '/NewApplicant/' + item._id }" >Application Form</router-link>
           <router-link :to="{ path: '/ApplicantsView/' + item._id }" >Applicants</router-link>
        </div>
    <div class="container">
      <li>
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
          
      <b-button class="mt-3" variant="info" @click.prevent="editVacancy(item._id)">Save</b-button>
        </li>
          </div>
      </li>
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
      vacancyTitle: '',
      companyName: '',
      salary: '',
      street: '',
      town: '',
      city: '',
      postcode: '',
      arrayItem: jobArray,
    };
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    },
    editVacancy() {
      const body = { vacancyTitle: this.$data.vacancyTitle, companyName: this.$data.companyName,
      street: this.$data.street, salary: this.$data.salary, town: this.$data.town,
      city: this.$data.salary, postcode: this.$data.postcode };
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
.vac li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px 10px 40px;
      h5,  p {
      color: #000;
      margin: 0
    }
  }
  label {
      display: flex;
      color: rgba(255, 255, 255, 0.5)!important;
  }
  .form-control {
        background-color: #fff !important;
  }
  .container li {
    display: block;
    background: #343a40;
    padding: 25px 25px 15px 25px;
    margin-bottom: 20px;
  }
    .banner {
    display: flex;
    background-color: lightgrey;
    justify-content: space-evenly;
    margin: 0 40px 15px 40px;
    a {
      color: #000;
      padding: 15px 10px;
      text-decoration: none;
    }
      a:hover{
      background: #343a40;
      color: #fff;
      opacity: 0.7;
      transition: .7s;
    }
    a.router-link-active {
    background: #343a40;
    color: #fff;
    padding: 15px 10px;
  }
}
</style>