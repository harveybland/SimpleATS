<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Simple ATS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/" class="nav">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/Vacancies" class="nav">Vacancies</router-link></b-nav-item>
        <b-nav-item><router-link to="/NewVacancy" class="nav">Create Vacancy</router-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
      <b-navbar-nav v-if="!user">
        <b-nav-item><router-link to="/Login" class="nav">Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/Account" class="nav">Sign up</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="user">
        <b-nav-item>
          <div style="display: flex;">
          <p class="mb-0 mr-3">Hello {{ username }}</p>
          <a to="/Login" class="nav" @click="logoutUser">
              <b-button variant="warning" class="logout">Logout</b-button></a>
          </div>
          </b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
      return {
        username: '',
        user: false
      }
    },
    mounted() {
      if (localStorage.username) {
        this.username = localStorage.username;
      } 
    },
    watch: {
      username(newUsername) {
        localStorage.username = newUsername
      }
    },
    created() {
      // const username = localStorage.getItem('username')
      // console.log(username)
      if (localStorage.getItem('token') === null) {
        this.user = false
      } else {
        this.user = true
      };
      if (localStorage.getItem('token') === "undefined") {
        this.user = false
      }
    },
    methods: {
      logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.$router.push('/login');
        location.reload();
      },
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
  .logout {
    padding: 0.2rem 0.4rem !important;
    font-size: 0.85rem !important;
  }
</style>