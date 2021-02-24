<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" v-model="login.username" placeholder="admin" autocomplete="on" class="form-control">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="login.password" placeholder="password" autocomplete="on" class="form-control">
                </div>
            <b-button 
                variant="primary" 
                @click="loginUser">Login
            </b-button>
        </b-form>
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
        }
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
        
    },
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

