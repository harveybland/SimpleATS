<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">SimpleATS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="active">
        <b-nav-item><router-link to="/home" class="nav">Dashboard</router-link></b-nav-item>
        <b-nav-item><router-link to="/Vacancies" class="nav">Vacancies</router-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
      <b-navbar-nav v-if="!user" class="active">
        <b-nav-item><router-link to="/Login" class="nav">Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/Account" class="nav">Sign up</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="user">
        <b-nav-item>
          <div style="display: flex;">
          <p class="mb-0 mr-3">{{ username }}</p>
          <a to="/Login" @click="logoutUser">
              <b-button variant="warning" class="logout"><b-icon icon="power" aria-hidden="true"></b-icon>Logout</b-button></a>
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
      padding: 1.2rem 0.8rem;
      font-size: 14px;
  } 
  .active .nav-item a:hover{
    background: #e2f3f8;
    opacity: 0.9;
    transition: 1s;
    color: #000 !important;
  }
  a.router-link-active {
    background: #e2f3f8;
    color: #000 !important;
  }
  .navbar {
      padding: 0 1rem;
  }
  .nav {
    color: #fff;
    text-decoration: none;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
      padding: 0
  }
  p {
    color: #fff;
    padding-top: 4px;
  }
  .logout {
    padding: 0.25rem 0.4rem !important;
    font-size: 0.85rem !important;
  }
</style>