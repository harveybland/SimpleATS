<template>
  <div class="container account">
    <div v-if="!submitted">
      <div class="text-center mt-5 mb-5">
        <h2>Create Account</h2>
      </div>
      <b-form v-if="!submitted">
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
        <b-button variant="primary" type="submitted" @click.prevent="submitForm"
          >CREATE</b-button
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
              this.$router.push('/Login');
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
    .account {
      height: 86vh;
    }
    label {
        display: flex;
    }
</style>


