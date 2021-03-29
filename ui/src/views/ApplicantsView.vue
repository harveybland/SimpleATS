<template>
  <div>
      <div class="header mb-4">
        <ul class="vac">
            <li>
            <h5>{{ arrayItem.vacancyTitle }}</h5>
            <p>{{ arrayItem.companyName }} - {{ arrayItem.town }}</p>
          </li>
        </ul>
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
                <h4>Rejected Applicants</h4>
            <div class="active">  
              <b-dropdown id="dropdown-right" dropright right text="New" class="m-2">
              <b-dropdown-item><router-link :to="{ path: '/ApplicantsView/' + arrayItem._id }">New</router-link></b-dropdown-item>
              <b-dropdown-item><router-link :to="{ path: '/ApplicantProgress/' + arrayItem._id }" >Progress</router-link></b-dropdown-item>
              <b-dropdown-item><router-link :to="{ path: '/ApplicantReject/' + arrayItem._id }">Rejected</router-link></b-dropdown-item>
          </b-dropdown>
          </div>
        </div>
        <div class="applicants box">
          <ul>
          <li v-for="item in filteredApplicant" v-bind:key="item._id" class="applicantData">
                <div>
                  <h5>Name</h5>
                  <p>{{ item.firstname }} {{ item.surname }}</p>
                </div>
                <div>
                   <h5>Email</h5>
                    <p>{{ item.emailaddress }} </p>
                </div>
                  <div>
                   <h5>Postcode</h5>
                   <p>{{ item.postcode }} </p>
                </div>
                 <div>
                   <h5>Mobile</h5>
                   <p>{{ item.mobile }} </p>
                </div>
                <div>
                   <h5>Current Employer</h5>
                   <p>{{ item.currentEmployer }}</p>
                </div>
                <div>
                   <h5>Current Role</h5>
                   <p>{{ item.currentJobTitle }}</p>
                </div>
            </li>
          </ul>
          <div>
            <li v-for="item in filteredStatus" v-bind:key="item._id" class="status">
            <b-form-select 
              v-on:change="updateStatus($event, item._id)"  
              v-model="item.applicationStatusId" 
              :options="options">
              <template #first>
                <b-form-select-option :value="null" disabled>Status</b-form-select-option>
              </template>
              </b-form-select>
              
              <p>{{ item.applicationStatus }}</p>
            </li>
          </div>
          </div>
          </div>
        </div>
    </div>
</template>
<script>

let job = { vacancyTitle: "test" };
let applicant = { firstname: "test" };
let applicantStatus = { status: "test" };
let id = "";
import { gsap } from "gsap";
import { HttpService } from "@/services/http.service";
export default {
  name: "ApplicantsView",
  data() {
    return {
      arrayItem: job,
      applicantItem: [],
      applicantStatusItem: [],
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
      async getApplicant() {
      this.id = this.$router.currentRoute.params.id;
      this.applicantItem = await HttpService.httpGet("applications/" + this.id);
      this.applicantStatusItem = await HttpService.httpGet("applicantStatus/" + this.id)
    },
      updateStatus(event, applicantId) {
        console.log(event, applicantId)
        const body = { applicationStatusId: event }
        HttpService.httpPut("updateStatus/" + applicantId, body)
        .then(res => {
          location.reload();
        })
        .catch(err => {
          console.log(err)
        })
      }
  },
     beforeMount() {
      this.getJob();
      this.getApplicant();
  },
  computed: {
      filteredStatus() {
        if (!!this.applicantStatusItem) {
        return this.applicantStatusItem.filter((item) => {
          return item.applicationStatus === "New" 
        }
      )}
    },
      filteredApplicant() {
      if (!!this.applicantItem) {
        return this.applicantItem.filter((status) => {
          return status.applicationStatusId === "604a033e9448df2d9810ee20"
        })
      }
    }
  },
    mounted() {
      gsap.from(".box", {
      duration: 0.8,
      y: 200,
      opacity: 0, 
    })
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
    padding: 8px 16px;
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      margin-bottom: 23px;
  }

  .status {
    margin-bottom: 21px;
    p {
      background-color: #428bca;
      padding: 19px 10px 18.5px 10px;
    }
  }

</style>