<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form @submit.prevent="loginUser">
            <b-form-group label="username">
                <b-form-input v-model="login.username" placeholder="Admin" required></b-form-input>
            </b-form-group>
            <b-form-group label="password">
                <b-form-input v-model="login.password" placeholder="Password" required></b-form-input>
            </b-form-group>
        </b-form>
        <b-button variant="primary">Login</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
        return {
            login: {
                username: 'admin',
                password: 'password'
            }
        }
    },
      methods: {
    async loginUser() {
      try {
        let res = await this.$http.post("/api/", + this.login);
        let token = res.data.data.token;
        localStorage.setItem("user", token);

        this.$router.push("/me");
      } catch (err) {
        console.log(err.response);
      }
    }
    },
    //  created() {
    //     this.form = JSON.parse(localStorage.getItem('token'));
    // },
    //  mounted() {
    //     if (localStorage.username) {
    //         this.username = localStorage.username;
    //     }
    // },
    // watch: {
    //     username(newUsername) {
    //         localStorage.username = newUsername;
    //     }
    // },
}
</script>

<style scoped>
   .login {
        height: 86vh;
    }
</style>