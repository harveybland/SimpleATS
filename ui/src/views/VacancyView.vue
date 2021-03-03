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
    <div>
      <li v-for="item in arrayItem" v-bind:key="item._id">
        <div class="banner">
          <!-- <router-link to="/Vacancies"><b-icon-arrow-up rotate="-90"></b-icon-arrow-up></router-link> -->
          <router-link :to="{ path: '/Vacancies/' + item._id }">Details</router-link>
          <router-link :to="{ path: '/editVacancy/' + item._id }">Job Description</router-link>
           <router-link :to="{ path: '/ApplicantForm/' + item._id }" >Application Form</router-link>
        </div>
        <div class="container">
          <li>
            <div class="flexL">    
              <h5>Job Title</h5>
                <p>{{ item.vacancyTitle }}</p>
              <h5>Company</h5>
                <p>{{ item.companyName }}</p>
              <h5>Street</h5>
                <p>{{ item.street }}</p></div>
            <div class="flexR">
              <h5>City</h5>
              <p>{{ item.city }}</p>
             <h5>Town</h5> 
              <p> {{ item.town }} </p>
             <h5>Postcode</h5>
              <p> {{ item.postcode }}</p>

              <p> {{ item.isDeleted }}</p>
            </div>
          </li>
            <div>
              <b-button variant="danger" @click.prevent="deleteVacancy(item._id)" class="mr-3">Remove</b-button>
              <b-button variant="info" @click.prevent="recoverJob()">Recover</b-button>
            </div>
        </div>
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
    recoverJob() {
      this.id = this.$router.currentRoute.params.id;
      HttpService.httpPut("updateJob/" + this.id)
      .then(res => {
        
      })
    }
    },
   beforeMount() {
    this.getJob();
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
    .flexL {
    width: 50%;
  }
    .flexR {
    width: 50%;
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