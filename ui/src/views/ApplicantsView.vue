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
    <div>
      <li>
        <div class="banner">
          <!-- <router-link to="/Vacancies"><b-icon-arrow-up rotate="-90"></b-icon-arrow-up></router-link> -->
          <router-link :to="{ path: '/Vacancies/' + arrayItem._id }">Details</router-link>
          <router-link :to="{ path: '/editVacancy/' + arrayItem._id }">Job Description</router-link>
           <router-link :to="{ path: '/NewApplicant/' + arrayItem._id }" >Application Form</router-link>
          <router-link :to="{ path: '/ApplicantsView/' + arrayItem._id }" >Applicants</router-link>
        </div>
         </li>
        <div class="container applicants">
          <li v-for="item in applicantItem" v-bind:key="item._id">
                <div>
                  <h5>Name</h5>
                  <p>{{ item.firstname }} {{ item.surname }}</p>
                </div>
                <div>
                   <h5>Contact details</h5>
                   <p>{{ item.emailaddress }} {{ item.postcode}} {{ item.mobile }} </p>
                </div>
                <div>
                   <h5>Current work</h5>
                   <p>{{ item.currentJobTitle }} {{ item.currentEmployer }} {{ item.jobid }}</p>
                </div>
          </li>
        </div>
    </div>
  </div>
</template>
<script>

let job = { vacancyTitle: "test" };
let applicant = { firstname: "test" };
let id = "";

import { HttpService } from "@/services/http.service";
export default {
  name: "ApplicantsView",
  data() {
    return {
      arrayItem: job,
      applicantItem: applicant
    };
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    },
      async getApplicant() {
      this.id = this.$router.currentRoute.params.id;
      this.applicantItem = await HttpService.httpGet("applications/" + this.id)
    }
    },
   beforeMount() {
    this.getJob();
    this.getApplicant();
  },

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
  .container li {
    display: flex;
    flex-direction: row;
    background: #343a40;
    padding: 25px 25px 15px 25px;
    margin-bottom: 20px;
  }
  .applicants div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 30px;
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