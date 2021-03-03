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

            <b-form-group>
                 <label>Username</label>
                <b-form-input placeholder="admin" class="form-control" v-model.trim="$v.username.$model" :class="{
                    'is-invalid':$v.username.$error, 'is-valid':!$v.username.$invalid}"></b-form-input>
                    <div class="valid-feedback">Your username is valid</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.username.required">Username is required</span>
                        <span v-if="!$v.username.minLength"> at least {{ $v.username.$params.minLength.min }}</span>
                        <span v-if="!$v.username.maxLength"> at least {{ $v.username.$params.maxLength.max }}</span>
                    </div>
            </b-form-group>

            <b-form-group>
                 <label>Password</label>
                <b-form-input placeholder="password" type="password"  class="form-control" v-model.trim="$v.password.$model" :class="{
                    'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid}"></b-form-input>
                    <div class="valid-feedback">Your password is valid</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.password.required">Password is required</span>
                        <span v-if="!$v.password.minLength"> at least {{ $v.password.$params.minLength.min }}</span>
                        <span v-if="!$v.password.maxLength"> at least {{ $v.password.$params.maxLength.max }}</span>
                    </div>
            </b-form-group>

            <b-button @click.prevent="loginUser">Login</b-button>
        </b-form>
        </div>
    </div>
</template>

<script>
import { HttpService } from "@/services/http.service";
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
    }
    },
    methods: {
        loginUser() {
            this.$v.$touch() 
            if (this.$v.$invalid) {
                alert('Invalid username and password')
            } else {
            const body = { username: this.$data.username, password: this.$data.password };
            HttpService.httpPost("/login", body)
            .then(resp => {
                localStorage.setItem('token', JSON.stringify(resp));
                this.$router.push('/home');
                location.reload();
                localStorage.setItem('username', this.$data.username)
            })
            .catch(err => {
                console.log(err)
            })
            }
        }
    },
    validations: {
        username: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(10)
        },
        password: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(10)
        }
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

