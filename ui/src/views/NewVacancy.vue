<template>
    <div class="margin">
        <div class="header mb-4">
            <div class="routes">
                <router-link to="/Vacancies">View</router-link>
                <router-link to="/NewVacancy">Create</router-link>
            </div>
        </div>
           <b-form class="container border animate__animated animate__fadeIn">
               <div class="head">
                   <h4>Create a new vacancy</h4>
               </div>
            <div class="contain">
            <b-form-group class="box">
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

            <b-form-group class="box">
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

            <b-form-group class="box">
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
            
             <b-form-group class="box">
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

            <b-form-group class="box">
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

            <b-form-group class="box">
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

       <b-form-group class="box">
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

            <div class="box date">
                <div class="flexL">
                    <label>Start Date</label>
                    <b-form-datepicker  v-model="startDate" class="mb-3"></b-form-datepicker>
                </div>
                <div class="flexR">
                    <label>End Date</label>
                    <b-form-datepicker v-model="endDate"></b-form-datepicker>
                </div>
            </div>
    </div>
            <b-button @click.prevent="createVacancy" class="mb-4 box">Submit</b-button>
           </b-form>
    </div>
</template>

<script>

import { HttpService } from "@/services/http.service";
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { gsap } from "gsap";
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
            postcode: '',
            startDate: '',
            endDate: ''
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
            city: this.$data.city, postcode: this.$data.postcode, startDate: this.$data.startDate, 
            endDate: this.$data.endDate };
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
    mounted() {
      gsap.from(".box", {
      duration: 0.5,
      scale: 0.2, 
      opacity: 0, 
      stagger: 0.1,
    })
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
@import '@/styles/styles.scss';
.contain {
    margin: 20px 100px 20px 100px;
}
label {
    display: flex;
}
.date {
    display: flex;
    flex-direction: row;
    .flexL {
    width: 50%;
    margin-right: 10px;
  }
    .flexR {
    width: 50%;
    margin-left: 10px;
  }
}
</style>