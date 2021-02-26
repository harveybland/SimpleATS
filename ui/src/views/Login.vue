<template>
    <div>
        <div class="header">
            <h2 class="pt-3 pb-3 mb-5"></h2>
        </div>
        <div class="container account mt-5">
        <div class="title">
            <h2 class="pt-3 pb-3 mb-0">Login</h2>
        </div>
        <b-form class="mt-4 ml-5 mb-5 mr-5">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" v-model="login.username" placeholder="admin"  class="form-control">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="login.password" placeholder="password" class="form-control">
                </div>
            <b-button 
                @click="loginUser">Login
            </b-button>
        </b-form>
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
            submitted: false
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
                //  alert("SUCCESS!!");
                  //+ JSON.stringify(this.login)
            })
            .catch(err => {
                console.log(err)
                alert("Invalid username and password")
            })
        },
        
    }
}

</script>

<style scoped>
    #error {
    color: red;
    }
    label {
        display: flex;
    }
</style>

