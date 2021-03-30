<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">SimpleATS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
      <b-navbar-nav class="active">
        <b-nav-item><router-link to="/Login" class="nav">Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/Account" class="nav">Sign up</router-link></b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style scoped>
.navbar-nav {
    padding-top: 0;
}
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
      padding: 0;
  }
  p {
    color: #fff;
    padding-top: 4px;
  }
</style>