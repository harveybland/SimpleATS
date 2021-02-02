<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form v-if="!error">
            <b-form-group label="username">
                <b-form-input v-model="login.username" placeholder="Admin" required></b-form-input>
            </b-form-group>
            <b-form-group label="password">
                <b-form-input v-model="login.password" placeholder="Password" required></b-form-input>
            </b-form-group>
            <b-button variant="primary" type="loginUser" @click.prevent="loginUser">Login</b-button>
        </b-form>
    <div>
        <p>{{ this.login.username }}</p>
    </div>
        <div v-if="error" id="error">
            <p>Username or password is incorrect</p>
        </div>
    </div>
</template>

<script>
import { HttpService } from "@/services/http.service";

export default {
        name: 'Login',
        data() {
        return {
          login: {
            username: '',
            password: '',
            },
            error: false
        }
    },
    methods: {
        loginUser() {
           const body = { username: this.$data.login.username, password: this.$data.login.password };
           HttpService.httpPost("/login", body).then((resp) => {
             if (resp === "Login") {
                 HttpService.httpPost("login", body).then((authToken) => {
                     localStorage.setItem("token", JSON.stringify(authToken));
                     console.log(body, authToken);
                     this.$router.push('/');
                 })
                 .catch(error => {
                     console.log(error)
                 })
             }
           })
        }
    }
}

    //  loginUser() {
    //     HttpService.httpGet('login', {
    //         username: this.username,
    //         password: this.password
    //      })
    //      .then(res => {
    //          this.$router.push("/")
    //      })
    //      .catch(error => {
    //          this.error = true
    //      })
    // },

    //  try {
    //     let res = await this.$http.post("/api/", + this.login);
    //     let token = res.data.data.token;
    //     localStorage.setItem("user", token);

    //     this.$router.push("/me");
    //   } catch (err) {
    //     console.log(err.response);
    //   }
</script>

<style scoped>
   .login {
        height: 86vh;
    }
#error {
  color: red;
}
</style>

