<template>
  <div class="container account">
    <div v-if="!submitted">
      <div class="text-center mt-5 mb-5">
        <h2>Create Account</h2>
      </div>
      <b-form>
        <!-- <b-form-group label="First name">
                <b-form-input v-model="form.FirstName" placeholder="Enter name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Surname">
                <b-form-input v-model="form.name" placeholder="Surname" required></b-form-input>
            </b-form-group>
            <b-form-group label="Email">
                <b-form-input v-model="form.Email" placeholder="Email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Street">
                <b-form-input v-model="form.Street" placeholder="Street" required></b-form-input>
            </b-form-group>
            <b-form-group label="Town">
                <b-form-input v-model="form.Town" placeholder="Town" required></b-form-input>
            </b-form-group>
            <b-form-group label="Postcode">
                <b-form-input v-model="form.Postcode" placeholder="Postcode" required></b-form-input>
            </b-form-group>
            -->

        <b-form-group label="username">
          <b-form-input
            v-model="form.username"
            placeholder="Admin"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="password">
          <b-form-input
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button variant="primary" @click.prevent="submitForm"
          >CREATE</b-button
        >
      </b-form>
    </div>
    <div v-if="submitted" class="text-center mt-5 mb-5">
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
      // 1.
      // You need to get the data from the from model and add it into the body
      // I googled "vue get data" the first link shows you how to do it 
      // https://stackoverflow.com/questions/46091418/vuejs-get-data-as-object
      // this console log will print out the username into the console. 
      console.log(this.$data.form.username);

      const body = { username: "admin", password: "password" };
      HttpService.httpPost("user/create", body).then(() => {
        HttpService.httpPost("login", body).then((authToken) => {
          localStorage.setItem("token", JSON.stringify(authToken));
        });

        // 2.
        // This method is close to what you need, it isn't far off from the
        // one you currently have, it just has some error catching,
        // you need to use this method but add your local storage bit in.

        //       HttpService.httpPost("user/create", body).then((resp) => {

        //         if (resp === "User Created") {

        //           HttpService.httpPost("login", body).then((authToken) => {
        //             // save the auth token in local storage
        //             console.log(authToken);
        //           });
        //         }
      });
    },
  },
};
</script>

<style scoped>
.account {
  height: 86vh;
}
</style>