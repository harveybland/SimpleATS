<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form v-if="!error">
            <b-form-group>
                <label>Username</label>
                <b-form-input 
                    v-model="login.username" 
                    placeholder="Admin" 
                    required>
                </b-form-input>
            </b-form-group>
            <b-form-group>
                <label>Password</label>
                <b-form-input 
                    v-model="login.password" 
                    placeholder="Password" 
                    required>
                </b-form-input>
            </b-form-group>
            <b-button 
                variant="primary" 
                @click="loginUser">Login
            </b-button>
        </b-form>
        <div class="alert alert-danger mt-3" v-if="error">
            {{ error }}
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
                password: ''
            },
            error: null
        }
    },
    methods: {
        loginUser() {
            const body = { username: this.$data.login.username, password: this.$data.login.password };
            HttpService.httpPost("/login", body)
            .then(resp => {
                localStorage.setItem('token', JSON.stringify(resp));
                this.$router.push('/');
                location.reload();
                localStorage.setItem('username', this.$data.login.username)
            })
            .catch(err => {
                this.error = 'invalid username and password'
            })
        },
    }
}

</script>

<style scoped>
   .login {
        height: 85.5vh;
    }
    #error {
    color: red;
    }
    label {
        display: flex;
    }
</style>

