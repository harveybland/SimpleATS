//To Run install

npm init -y
npm install express
npm install cors
npm install mongoose

//to run server 
node index.js

//to run vue
npm run serve

//to test
go to tests->test.http


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
                    <ul v-if="errors.length">
                        <li><b-alert show variant="danger">Username is incorrect</b-alert></li>
                    </ul>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="login.password" placeholder="password" class="form-control">
                      <ul v-if="errors.length">
                        <li><b-alert show variant="danger">Password is incorrect</b-alert></li>
                    </ul>
                </div>
            <b-button 
                @click.prevent="loginUser">Login
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
            errors: [],
        login: {
            username: null,
            password: null
        }
    }
    },
    methods: {
        loginUser() {
            this.errors = [];
            if(this.login.username === null){
                this.errors.push("name is required")
            } else {
            const body = { username: this.$data.login.username, password: this.$data.login.password };
            HttpService.httpPost("/login", body)
            .then(resp => {
                localStorage.setItem('token', JSON.stringify(resp));
                this.$router.push('/home');
                location.reload();
                localStorage.setItem('username', this.$data.login.username)
            })
            .catch(err => {
                console.log(err)
            })
        }
      }
    }
}

</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
    #error {
    color: red;
    }
    label {
        display: flex;
    }
</style>

