<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" v-model="login.username" placeholder="admin" autocomplete="on" class="form-control">
                    <div v-if="submitted && !$v.login.username.required" class="invalid-feedback">First Name is required</div>
                    <span v-if="!$v.login.username.minLength">Username must be at least 6 characters</span>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="login.password" placeholder="password" autocomplete="on" class="form-control">
                    <div v-if="submitted && $v.login.password.$error" class="invalid-feedback">
                        <span v-if="!$v.login.password.minLength">Password must be at least 6 characters</span>
                    </div>
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
import { required, minLength, maxLength } from "vuelidate/lib/validators";
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
        
    },
    validations: {
        login: {
        username: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(10)
        },
        password: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(15)
      }
    }
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

