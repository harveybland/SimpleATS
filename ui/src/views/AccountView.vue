<template>
    <div class="container account">
        <div class="text-center mt-5 mb-5">
            <h2>Create Account</h2>
        </div>
        <b-form>
            <!-- <b-form-group label="First name">
                <b-form-input v-model="form.FirstName" placeholder="Enter name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Surname">
                <b-form-input v-model="form.name" placeholder="Surname" required></b-form-input>
            </b-form-group>
            <b-form-group label="Email">
                <b-form-input v-model="form.Email" placeholder="Email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Street">
                <b-form-input v-model="form.Street" placeholder="Street" required></b-form-input>
            </b-form-group>
            <b-form-group label="Town">
                <b-form-input v-model="form.Town" placeholder="Town" required></b-form-input>
            </b-form-group>
            <b-form-group label="Postcode">
                <b-form-input v-model="form.Postcode" placeholder="Postcode" required></b-form-input>
            </b-form-group>
            -->
            
            <b-form-group label="username">
                <b-form-input v-model="form.username" placeholder="Admin" required></b-form-input>
            </b-form-group>
            <b-form-group label="password">
                <b-form-input v-model="form.password" placeholder="Password" required></b-form-input>
            </b-form-group>
      </b-form>
        <b-button variant="primary" @click="submitForm">CREATE</b-button>
    </div>
</template>

<script>
export default {
    name: 'AccountView',
        data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
        const settings = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username: "harvey", password: "password" })
        };
        fetch("http://localhost:4000/api/user/create", settings)
            .then(response => response.json())
        }
    }
}
</script>

<style scoped>
    .account {
        height: 86vh;
    }
</style>