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
          <router-link to="/Vacancies"><b-icon-arrow-up rotate="-90"></b-icon-arrow-up></router-link>
          <router-link :to="{ path: '/Vacancies/' + arrayItem._id }">Details</router-link>
          <router-link :to="{ path: '/editVacancy/' + arrayItem._id }">Job Description</router-link>
          <router-link :to="{ path: '/NewApplicant/' + arrayItem._id }" >Application Form</router-link>
          <router-link :to="{ path: '/ApplicantsView/' + arrayItem._id }" >Applicants</router-link>
        </div>
        <div class="container">
            <div class="head"> 
              <h4>Vacancy Details</h4>
            </div>
          <ul class="box">
          <li>
            <div class="flexL">
              <div>
                <label>Job Title</label>
                <p>{{ arrayItem.vacancyTitle }}</p>
              </div>
              <div>
                <label>Company</label>
                <p>{{ arrayItem.companyName }}</p>
              </div>
              <div>
                <label>Street</label>
                <p>{{ arrayItem.street }}</p></div>
              </div>        
            <div class="flexR">
              <div>
                <label>City</label>
                <p>{{ arrayItem.city }}</p>
              </div>    
              <div>
                <label>Town</label> 
                <p> {{ arrayItem.town }} </p>
              </div>    
              <div>
                <label>Postcode</label>
                <p> {{ arrayItem.postcode }}</p>
              </div>    
            </div>
          </li>
            <div v-if="arrayItem.isDeleted === false" class="mb-4">
              <b-button variant="danger" @click.prevent="deleteVacancy(arrayItem._id)" class="mr-3">Remove</b-button>
            </div>
          <div v-if="arrayItem.isDeleted === true">
                <b-button variant="info" @click.prevent="recoverJob(arrayItem._id)">Recover</b-button>
          </div>
          </ul>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
let job = { vacancyTitle: "test" };
let id = "";
import { gsap } from "gsap";
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
      HttpService.httpPut("undelete/" + this.id)
      .then(res => {
        this.$router.push('/Vacancies')
      })
    }
    },
    beforeMount() {
    this.getJob();
  },
    mounted() {
      gsap.from(".box", {
      duration: 0.8,
      y: 200,
      opacity: 0, 
    })
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

//Main
  .container li {
    display: flex;
    flex-direction: row;
    padding: 25px 25px 15px 25px;
    text-align: left;
    .flexL {
    width: 50%;
    div {
      border: 1px solid #000;
      margin: 5px 10px 20px 10px;
    }
  }
    .flexR {
    width: 50%;
    div {
      border: 1px solid #000;
      margin: 5px 10px 20px 10px;
    }
  }
  p {
    padding: 6px 0 6px 10px;
    margin: 0;
  }
}
label {
  display: flex;
  border: none;
}

</style>