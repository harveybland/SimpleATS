<template>
    <div class="container account">
    <div v-if="!submitted">
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
            <b-button variant="primary" @click="submitForm">CREATE</b-button>
      </b-form>
      </div>
        <div v-if="submitted" class="text-center mt-5 mb-5">
            <p>Thanks for creating an account</p>
        </div>
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
            },
            editAccount: null,
            submitted: false
        }
    },
    methods: {
        //get
        mounted() {
            fetch("http://localhost:4000/api/user")
            .then(res => res.json())
            .then((form) =>{
                this.username = form,
                this.password = form;
            })
        },

        //delete
        deleteAccount(id) {
            fetch("http://localhost:4000/api/user/create/", + id, {
                method: "DELETE"
            })
            .then(() => {
                console.log("Deleted")
            })
        },

        // post
        submitForm() {
        const create = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username: "harvey", password: "password"})
        };
        fetch("http://localhost:4000/api/user/create", create)
            .then(res => res.json())
            .then(this.submitted = true)
        },
        
        //put
        updateAccount(form) {
        fetch("http://localhost:4000/api/user/create/", + form.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then(() => {
                this.editAccount = null;
        })
        }
    }
}
</script>

<style scoped>
    .account {
        height: 86vh;
    }
</style>