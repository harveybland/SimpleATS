<template>
  <div>
    <div class="header mb-4">
      <div class="vac">
          <router-link to="/Vacancies">View</router-link>
          <router-link to="/NewVacancy">Create</router-link>
          <router-link to="/Search">Search</router-link>
      </div>
      <div class="active">
        <div>
          <p>Vacancies</p>
        </div>
        <div>  
            <b-dropdown id="dropdown-right" right text="Active" class="m-2">
            <b-dropdown-item><router-link to="/Vacancies">Active</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/Vacancies/ClosedJobs">Closed</router-link></b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <div class="container">
      <li v-for="item in arrayItem" v-bind:key="item._id">
        <div>
            <h5>{{ item.vacancyTitle }}</h5>
          <p>{{ item.companyName }} - {{ item.city }} - {{ item.town }}</p>
        </div>
        <div>
          <router-link :to="{ path: '/Vacancies/' + item._id }" class="nav">
            <h6>More details <b-icon-arrow-up rotate="90"></b-icon-arrow-up></h6>
          </router-link>
        </div>
      </li>
    </div>
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
    },
};
</script>

<style lang="scss" scoped>
  .header {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
  }
  .vac {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    a {
      color: #000;
      padding: 15px 10px;
      text-decoration: none;
    }
      a:hover{
      background: #fff;
      opacity: 0.7;
      transition: .7s;
    }
    a.router-link-active {
    background: #fff;
    padding: 15px 10px;
  }
}
.active {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    p {
      padding-top: 15px;
      color: #000;
      margin: 0;
    }
    a {
      color: #000;
      text-decoration: none;
    }
}
  .container li {
    display: flex;
    justify-content: space-between;
    background: #343a40;
    align-items: center;
    padding: 25px 25px 15px 25px;
    margin-bottom: 20px;
  }
  .btn-primary {
    background-color: #345b69 !important;
  }
  h5 {
    text-align: left;
    color: #e5e5e5;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
  }
</style>