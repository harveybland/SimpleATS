<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" v-model="login.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.login.firstName.$error }" />
                                <div v-if="submitted && !$v.login.firstName.required" class="invalid-feedback">First Name is required</div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="login.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.login.password.$error }" />
                                <div v-if="submitted && $v.login.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.login.password.required">Password is required</span>
                                    <span v-if="!$v.login.password.minLength">Password must be at least 6 characters</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

    export default {
        name: "app",
        data() {
            return {
                login: {
                    firstName: "",
                    password: "",
                },
                submitted: false
            };
        },
        validations: {
            login: {
                firstName: { required },
                password: { required, minLength: minLength(6) },
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.login));
            }
        }
    };
</script>