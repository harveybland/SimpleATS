<template>
    

<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Simple ATS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/" class="nav">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/Vacancies" class="nav">Vacancies</router-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
      <b-navbar-nav v-if="!user">
        <b-nav-item><router-link to="/Login" class="nav">Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/Account" class="nav">Sign up</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="user">
        <p>{{ username }}</p>
        <b-nav-item><router-link 
          to="/Login" 
          class="nav"
          @click="logoutUser"
          >Logout</router-link></b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { HttpService } from "@/services/http.service";
export default {
    name: 'Header',
    data() {
      return {
        username: '',

        user: false
      }
    },
    created() {
      if (localStorage.getItem('token') === null) {
        this.user = false
      } else {
        this.user = true
      }
    },
    //   mounted() {
    //     HttpService.httpGet("/user", { headers : { token: localStorage.getItem('token')}})
    //     .then(res => {
    //         this.username = res.data.username;
    //     })
    // },
    methods: {
      logoutUser() {
        localStorage.clear();
        this.$router.push('/login');
        location.reload();
      }
    }
}
</script>

<style scoped>
  .nav {
    color: rgba(255, 255, 255, 0.5)!important;
    text-decoration: none;
  }
  .nav:hover {
    color: rgba(255, 255, 255, 0.75) !important;
    text-decoration: none;
  }
</style>