<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form>
            <b-form-group label="username">
                <b-form-input v-model="form.username" placeholder="Admin" required></b-form-input>
            </b-form-group>
            <b-form-group label="password">
                <b-form-input v-model="form.password" placeholder="Password" required></b-form-input>
            </b-form-group>
        </b-form>
        <b-button variant="primary">Login</b-button>
    </div>
</template>

<script>
    export default {
        name: 'LoginView',
        data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
        mounted() {
        if (localStorage.username) {
            this.username = localStorage.username;
        }
    },
    watch: {
        username(newUsername) {
            localStorage.username = newUsername;
        }
    },
    }
</script>

<style scoped>
   .login {
        height: 86vh;
    }
</style>