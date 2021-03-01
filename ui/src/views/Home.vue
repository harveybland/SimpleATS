<template>
<div class="home">
    <div class="container home">
           <div class="text-center pt-5 text">
            <h1 class="mb-5">Simple ATS</h1>
            <div v-if="!user">
                <h3>Please <router-link to="/Login">Sign in</router-link></h3>
            </div>
            <div v-if="user">
                <h5>Welcome user</h5>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
      name: 'Home',
      created() {
        if (localStorage.getItem('token') === null) {
          this.user = false
        } else {
          this.user = true
        };
      }
}
</script>

<style>
  .container {
    padding: 0 !important;
  }
  .home {
    background-color: #e2f3f8
  }
  .header {
    background-color: #e2f3f8;
  }
  .title {
    background-color: #3c6473;
    color: #fff
  }
  .text {
    height: 90.6vh;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    color: #343a40;
  }
  .btn-secondary {
    background-color: #345b69 !important;
    border-color: #345b69 !important;
  }
  .btn-secondary:hover {
      background-color: #41788d !important;
      border-color: #41788d !important;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
  }
  h2 {
    font-size: 20px !important;
  }
  h5 {
    color: #e5e5e5;
  }
  h6 {
    color: rgba(255, 255, 255, 0.5);
  }
  h6:hover {
    color: #fff !important;
    text-decoration: underline #fff;
  }
  .form-control {
    background-color: rgba(255, 255, 255, 0.5) !important;
    border: 1px solid #000 !important;
  }
  .account {
    border: 1px solid #000;
  }
</style>