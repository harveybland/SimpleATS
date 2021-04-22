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
             <router-link :to="{ path: '/ApplicantForm/' + item._id }" >Application Form</router-link>
             <router-link :to="{ path: '/Applicants/' + item._id }" >Applicants</router-link>
            </div>
        </li>
          <div class="container">
              <li v-for="item in arrayItem" v-bind:key="item._id">
                  <h4>Applying for - {{ item.vacancyTitle }}</h4>
                  <p>{{ item.companyName }} - {{ item.town }}</p>
              </li>
            <li>
              <b-form-group>
                      <label>First Name</label>
                      <b-form-input v-model="firstName"></b-form-input>
                </b-form-group>
                              <b-form-group>
                    <label>Last Name</label>
                    <b-form-input v-model="lastName"></b-form-input>
                </b-form-group>
              </li>
            </div>
              <b-button class="mt-3" variant="info" @click.prevent="apply()">Apply</b-button>
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
  name: "ApplicantForm",
  data() {
    return {
      firstName: '',
      lastName: '',
      arrayItem: jobArray,
    }
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    }
    },
    beforeMount() {
    this.getJob();
  }
};
</script>

<style lang="scss" scoped>
  .container {
    text-align: left;
    h3 {
      color: #000
    }
    p {
      color: #000
    }
    
  }
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