<template>
    <div class="margin">
        <div class="header mb-4">
            <div class="vac">
                <router-link to="/Vacancies">View</router-link>
                <router-link to="/NewVacancy">Create</router-link>
                <router-link to="/search">Search</router-link>
            </div>
        </div>
           <b-form class="container">
            <b-form-group>
                <label>Vacancy Title</label>
                <b-form-input placeholder="Senior Dev" v-model.trim="$v.vacancyTitle.$model" :class="{
                    'is-invalid':$v.vacancyTitle.$error, 'is-valid':!$v.vacancyTitle.$invalid}"></b-form-input>
                    <div class="valid-feedback">Your vacancy title is valid</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.vacancyTitle.required">Vacancy title is required</span>
                        <span v-if="!$v.vacancyTitle.minLength"> at least {{ $v.vacancyTitle.$params.minLength.min }}</span>
                        <span v-if="!$v.vacancyTitle.maxLength"> at least {{ $v.vacancyTitle.$params.maxLength.max }}</span>
                    </div>
            </b-form-group>

            <b-form-group>
                <label>Company Name</label>
                <b-form-input placeholder="Genius Group" v-model.trim="$v.companyName.$model" :class="{
                    'is-invalid':$v.companyName.$error, 'is-valid':!$v.companyName.$invalid}"></b-form-input>
                    <div class="valid-feedback">Your company name is valid</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.companyName.required">Company name is required</span>
                        <span v-if="!$v.companyName.minLength"> at least {{ $v.companyName.$params.minLength.min }}</span>
                        <span v-if="!$v.companyName.maxLength"> at least {{ $v.companyName.$params.maxLength.max }}</span>
                    </div>
            </b-form-group>

            <b-form-group>
                <label>Salary</label>
                <b-form-input placeholder="10000" v-model.trim="$v.salary.$model" :class="{
                    'is-invalid':$v.salary.$error, 'is-valid':!$v.salary.$invalid}"></b-form-input>
                    <div class="valid-feedback">Your salary is valid</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.salary.required">Salary is required</span>
                        <span v-if="!$v.salary.minLength"> at least {{ $v.salary.$params.minLength.min }}</span>
                        <span v-if="!$v.salary.maxLength"> at least {{ $v.salary.$params.maxLength.max }}</span>
                    </div>
            </b-form-group>
            
             <b-form-group>
                <label>Street</label>
                <b-form-input placeholder="Broughton hall estate" v-model.trim="$v.street.$model" :class="{
                'is-invalid':$v.street.$error, 'is-valid':!$v.street.$invalid}"></b-form-input>
                <div class="valid-feedback">Your street is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.street.required">Street is required</span>
                    <span v-if="!$v.street.minLength"> at least {{ $v.street.$params.minLength.min }}</span>
                    <span v-if="!$v.street.maxLength"> at least {{ $v.street.$params.maxLength.max }}</span>
                </div>
            </b-form-group>

            <b-form-group>
                <label>Town</label>
                <b-form-input placeholder="Skipton" v-model.trim="$v.town.$model" :class="{
                'is-invalid':$v.town.$error, 'is-valid':!$v.town.$invalid}"></b-form-input>
                <div class="valid-feedback">Your town is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.town.required">Town is required</span>
                    <span v-if="!$v.town.minLength"> at least {{ $v.town.$params.minLength.min }}</span>
                    <span v-if="!$v.town.maxLength"> at least {{ $v.town.$params.maxLength.max }}</span>
                </div>
            </b-form-group>

            <b-form-group>
                <label>City</label>
                <b-form-input placeholder="North Yorkshire" v-model.trim="$v.city.$model" :class="{
                'is-invalid':$v.city.$error, 'is-valid':!$v.city.$invalid}"></b-form-input>
                <div class="valid-feedback">Your city is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.city.required">City is required</span>
                    <span v-if="!$v.city.minLength"> at least {{ $v.city.$params.minLength.min }}</span>
                    <span v-if="!$v.city.maxLength"> at least {{ $v.city.$params.maxLength.max }}</span>
                </div>
            </b-form-group> 

       <b-form-group>
                <label>Postcode</label>
                <b-form-input placeholder="BD23 3AG" v-model.trim="$v.postcode.$model" :class="{
                'is-invalid':$v.postcode.$error, 'is-valid':!$v.postcode.$invalid}"></b-form-input>
                <div class="valid-feedback">Your postcode is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.postcode.required">Postcode is required</span>
                    <span v-if="!$v.postcode.minLength"> at least {{ $v.postcode.$params.minLength.min }}</span>
                    <span v-if="!$v.postcode.maxLength"> at least {{ $v.postcode.$params.maxLength.max }}</span>
                </div>
            </b-form-group>

            <b-button @click.prevent="createVacancy">Submit</b-button>
           </b-form>
    </div>
</template>

<script>

import { HttpService } from "@/services/http.service";
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    name: 'CreateVacancy',
    data() {
        return {
            vacancyTitle: '',
            companyName: '',
            salary: '',
            street: '',
            town: '',
            city: '',
            postcode: ''
        }
    },
    methods: {
    createVacancy() {
        this.$v.$touch()    
        if (this.$v.$invalid) {
            alert('nope')
            } else {
            const body = { vacancyTitle: this.$data.vacancyTitle, companyName: this.$data.companyName,
            street: this.$data.street, salary: this.$data.salary, town: this.$data.town,
            city: this.$data.salary, postcode: this.$data.postcode };
            HttpService.httpPost('job', body)
            .then(res => {
                console.log(res);
                this.$router.push('/Vacancies');
            })
            .catch(error => {
            console.log(error);
            })
        }
        }
    },
    validations: {
            vacancyTitle: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(20)
        },
            companyName: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(15)
        },
            salary: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(10)
        },
            street: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(15)
        },
            town: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(15)
        },
            city: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(15)
        },
            postcode: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(10)
        }          
    }
}
</script>

<style lang="scss" scoped>
    .header {
        padding: 0 40px
    }
.vac {
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
    a {
    color: #000 !important;
    padding: 15px 10px;
    text-decoration: none;
    }
     a:hover{
    background: #fff;
    opacity: 0.7;
    transition: .7s;
  }
}
a.router-link-active {
    background: #fff;
    padding: 15px 10px;
    color: #000 !important;
}
label {
    display: flex;
}
.margin {
    margin-bottom: 171px;
}
</style>