<template>
  <div>
    <div class="header mb-4">
      <div class="routes">
          <router-link to="/Vacancies">View</router-link>
          <router-link to="/NewVacancy">Create</router-link>
      </div>
      <div class="active">
        <div>
          <p >Vacancies</p>
        </div>
        <div>  
            <b-dropdown id="dropdown-right" right text="Active" class="m-2">
            <b-dropdown-item><router-link to="/Vacancies">Active</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/Vacancies/ClosedJobs">Closed</router-link></b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <ul class="container">
      <li class="animate__animated animate__fadeIn border" v-for="item in arrayItem" v-bind:key="item._id">
            <h5>{{ item.vacancyTitle }}</h5>
          <div class="vacancies">
            <div>
                <p>{{ item.companyName }} - {{ item.city }} - {{ item.town }}</p>
            </div>
            <div>
              <router-link :to="{ path: '/Vacancies/' + item._id }" class="nav">
                <h6>More details <b-icon-arrow-up rotate="90"></b-icon-arrow-up></h6>
              </router-link>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
let jobArray = [
  {
    vacancyTitle: "test",
  },
];
import { HttpService } from "@/services/http.service";
export default {
  name: "Vacancies",
  data() {
    return {
      arrayItem: jobArray,
    };
  },
  methods: {
    async getJobs() {
      const res = await HttpService.httpGet("jobs");
      jobArray.splice(0, jobArray.length);
      jobArray.push(...res);
    }
    },
      beforeMount() {
        this.getJobs();
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';
  .header {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
  }
  
  //Main 
  .container li {
    margin-bottom: 20px;
    background: #e2f3f8;
  }
  .vacancies{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .btn-primary {
    background-color: #345b69 !important;
  }
  h5 {
    padding: 5px 0 5px 10px;
    text-align: left;
    color: #fff;
    background: #3c6473;
  }
  p {
    // color: rgba(255, 255, 255, 0.5);
    color: #000;
  }
</style>