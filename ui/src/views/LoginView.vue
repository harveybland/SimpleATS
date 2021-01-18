<template>
    <div class="container login">
        <div class="text-center mt-5 mb-5">
            <h2>Login</h2>
        </div>
        <b-form>
            <b-form-group label="Username">
                <b-form-input v-model="form.Username" placeholder="Admin" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password">
                <b-form-input v-model="form.Password" placeholder="Password" required></b-form-input>
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
                Username: '',
                Password: ''
            }
        }
    }
    }
</script>

<style scoped>
   .login {
        height: 86vh;
    }
</style>