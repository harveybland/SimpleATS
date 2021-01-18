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
      <b-navbar-nav>
        <b-nav-item><router-link to="/LoginView" class="nav">Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/AccountView" class="nav">Sign up</router-link></b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Header'
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