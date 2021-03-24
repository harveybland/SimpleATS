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
         </li>
        <div class="container">
           <div class="head">
              <h4>New Applicants</h4>
        </div>
        <div class="applicants">
          <div>
            <div>
              <b-form-select v-model="applicant" :options="options" size="sm" class="mt-3"></b-form-select>
              <div class="mt-3">Selected: <strong>{{ applicant }}</strong></div>
            </div>

          <select v-model="selected" class="form-control">
              <option disabled value="" >Please select one</option>
                  <option 
                  v-for="applicant in applicantStatusItem"
                  v-bind:value="applicant.applicationStatusId" 
                  v-bind:key="applicant._id">
                  {{ applicant.applicationStatus }}</option>
            </select>
              <div class="applicantData">
                  Applicants: {{ selected }}
              </div>
            </div>
          </div>
          <!-- <select v-model="applicant" class="form-control">
            <option disabled value="" selected="selected">Please select one</option>
            <option v-for="applicant in applicantStatusItem" :key="applicant.id" v-bind:value="applicant.id">
                    {{ applicant.applicationStatusId }}
              </option>
              <div v-for="applicant in applicantStatusItem" :key="applicant.id">
                <span>Applicants: {{ applicant.applicationStatusId }}</span>
              </div>
          </select> -->
        </div>
         <!-- <li v-for="item in applicantStatusItem" v-bind:key="item._id" class="applicantData">
                <div>
                  <p>Name</p>
                  <p>{{ item.firstname }} </p>
                </div>
                <div>
                   <p>ID</p>
                    <p>{{ item.applicationStatusId }}</p>
                </div>
                <div>
                   <p>Status</p>
                  <p>{{ item.applicationStatus }}</p>
                </div>
            </li> -->
          </div>
          <div>
      </div>
    </div>
</template>
<script>

let job = { vacancyTitle: "test" };
let applicantStatus = { status: "test" };
let id = "";

import { HttpService } from "@/services/http.service";
export default {
  name: "ApplicantsView",
  data() {
    return {
      arrayItem: job,
      applicantStatusItem: [],
      selected: '',
      applicant: '',
      options: [
          { value: '604a033e9448df2d9810ee20', text: 'New' },
          { value: '604a03489448df2d9810ee21', text: 'Pending' },
          { value: '604a03519448df2d9810ee22', text: 'Rejected' }
        ]
    };
  },
   methods: {
     async getJob() {
      this.id = this.$router.currentRoute.params.id;
      this.arrayItem = await HttpService.httpGet("job/" + this.id)
    },
      async getApplicantStatus() {
      this.applicantStatusItem = await HttpService.httpGet("applicantStatuss")
    }
  },
   beforeMount() {
    this.getJob();
    this.getApplicantStatus();
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';
  .head {
    background: #3c6473;
    display: grid;
    margin-bottom: 20px;
    grid-template-columns: 1fr 10%;
  }
  .active {
    background: #fff;
    li {
      margin: 0 !important;
    }
  }

 
  .applicants {
    display: grid;
    grid-template-columns: 1fr 11%;
    color: #000;
    h5 {
    padding: 8px 45.3px;
    background: #3c6473;
    margin: 0;
    color: #fff;
    font-size: 16px;
    }
    p {
      padding: 25px 10px 15px 15px;
      background: #e2f3f8;
      // background: #b1d2de;
      margin: 0;
    }
  }

  .applicantData {
    display: flex;
    margin-bottom: 20px;
    p {
    margin-right: 20px;
    margin-bottom: 0;
    }
  }

  .status {
    margin-bottom: 20px;
    p {
      background-color: #fff44f;
      padding: 20px 10px;
    }
  }


</style>