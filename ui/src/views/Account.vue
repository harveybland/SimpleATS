<template>
  <div>
    <div class="header">
        <h2 class="pt-3 pb-3 mb-5"></h2>
    </div>
    <div v-if="!submitted"  class="container account mt-5">
        <div class="title">
            <h2 class="pt-3 pb-3 mb-0">Create account</h2>
        </div>
      <b-form v-if="!submitted" class="mt-4 ml-5 mb-5 mr-5">
        <b-form-group>
          <label>Username</label>
          <b-form-input
            v-model="form.username"
            placeholder="Admin"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <label>Password</label>
          <b-form-input
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submitted" @click.prevent="submitForm"
          >Create</b-button
        >
      </b-form>
    </div>
    <div v-if="submitted" class="text-center mt-5 mb-5 alert alert-success">
      <p>Thanks for creating an account</p>
    </div>
  </div>
</template>

<script>
import { HttpService } from "@/services/http.service";

export default {
  name: "Account",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      editAccount: null,
      submitted: false,
    };
  },
  methods: {
    submitForm() {
        const body = { username: this.$data.form.username, password: this.$data.form.password };
        HttpService.httpPost("user/create", body).then((resp) => {
          if (resp === "User Created") {
            HttpService.httpPost("login", body).then((authToken) => {
              localStorage.setItem("token", JSON.stringify(authToken));
              console.log(body, authToken);
              this.$router.push('/');
              // location.reload();
            })
            .catch(error => {
              console.log(error);
            })
          }
      })
    }
  }
}

</script>

<style scoped>
    label {
        display: flex;
    }
</style>


