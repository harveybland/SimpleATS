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
        </li>
          <div class="container">
              <li v-for="item in arrayItem" v-bind:key="item._id">
                  <h4>Applying for - {{ item.vacancyTitle }}</h4>
                  <p>{{ item.companyName }} - {{ item.town }}</p>


                <b-form-group>
                      <label>id</label>
                      <b-form-input v-model="jobid">{{ id }}</b-form-input>
                </b-form-group>
              <b-form-group>
                      <label>First Name</label>
                      <b-form-input v-model="firstname"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Surname</label>
                    <b-form-input v-model="item.surname"></b-form-input>
                </b-form-group>
                     <b-form-group>
                      <label>Postcode</label>
                      <b-form-input v-model="postcode"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Mobile</label>
                    <b-form-input v-model="mobile"></b-form-input>
                </b-form-group>
                     <b-form-group>
                      <label>Email</label>
                      <b-form-input v-model="emailAddress"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Current Employer</label>
                    <b-form-input v-model="currentEmployer"></b-form-input>
                </b-form-group>
                     <b-form-group>
                      <label>Current Job Title</label>
                      <b-form-input v-model="currentJobTitle"></b-form-input>
                </b-form-group>
              </li> 
            </div>
              <b-button class="mb-3" variant="info" @click.prevent="createApplicant">Create</b-button>
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
  name: "NewApplicant",
  data() {
    return {
      jobid: '',
      firstname: '',
      surname: '',
      postcode: '',
      mobile: '',
      emailAddress: '',
      currentEmployer: '',
      currentJobTitle: '',
      arrayItem: jobArray,
    }
  },
   methods: {
      createApplicant() {
        const body = { jobid: this.$data.jobid, firstname: this.$data.firstname, surname: this.$data.surname,
        postcode: this.$data.postcode, mobile: this.$data.mobile, emailAddress: this.$data.emailAddress,
        currentEmployer: this.$data.currentEmployer, currentJobTitle: this.$data.currentJobTitle };
        this.id = this.$router.currentRoute.params.id;
        HttpService.httpPost('apply/' + this.id, body)
        .then(res => {
            this.$router.push('/ApplicantsView/' + this.id);
        })
        .catch(error => {
        console.log(error);
        })
    },
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