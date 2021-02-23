<template>
    <div class="container home">
           <div class="text-center mt-5 text">
            <h2 class="mb-5">Simple ATS</h2>
            <div v-if="!user">
                <h5>Please <router-link to="/Login">Sign in</router-link></h5>
            </div>
            <div v-if="user">
                <!-- <h5>Hello {{ username }}</h5> -->
            </div>
        </div>
    </div>
</template>

<script>
let username = { username: "test" };
let id = "";

import { HttpService } from "@/services/http.service";
export default {
        name: 'Home',
        data() {
            return {
                user: username
            }
        },
      created() {
        if (localStorage.getItem('token') === null) {
          this.user = false
        } else {
          this.user = true
        }
      },
      methods: {
        getUser() {
          
        }
      },
  //     beforeMount() {
  //        this.getUser();
  // },
}
</script>

<style>
  body {
    background-color: grey !important;
  }
  .text {
    height: 86vh;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    color: #343a40;
  }
  h2 {
    font-size: 36px !important;
    color: #343a40;
  }
  h5 {
    font-size: 20px !important;
  }
  .form-control {
    background-color: rgba(255, 255, 255, 0.5) !important;
    border: 1px solid #000 !important;
  }
</style>