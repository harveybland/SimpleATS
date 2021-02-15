<template>
    <div class="container margin">
        <h2 class="mt-4 mb-2">Create Vacancy</h2>
           <b-form>
            <b-form-group>
                <label>Vacancy Title</label>
                <b-form-input v-model="vacancyTitle" placeholder="Senior Dev"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Company Name</label>
                <b-form-input v-model="companyName" placeholder="Genius Group"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Salary</label>
                <b-form-input v-model="salary" placeholder="10000"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Street</label>
                <b-form-input v-model="street" placeholder="Broughton hall estate"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Town</label>
                <b-form-input v-model="town" placeholder="Skipton"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>City</label>
                <b-form-input v-model="city" placeholder="North Yorkshire"></b-form-input>
            </b-form-group>

             <b-form-group>
                <label>Postcode</label>
                <b-form-input v-model="postcode" placeholder="BD23 3AG"></b-form-input>
            </b-form-group>
                <b-button 
                variant="primary" 
                 @click="createVacancy">Submit
            </b-button>
           </b-form>
    </div>
</template>

<script>

import { HttpService } from "@/services/http.service";

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
            const body = { vacancyTitle: this.$data.vacancyTitle, companyName: this.$data.companyName,
            street: this.$data.street, salary: this.$data.salary, town: this.$data.town,
            city: this.$data.salary, postcode: this.$data.postcode };
            HttpService.httpPost('/job', body)
            .then(res => {
                console.log(res);
                this.$router.push('/Vacancies');
            })
            .catch(error => {
              console.log(error);
            })
        }
    }
    }
</script>

<style scoped>
    label {
        display: flex;
    }
    .margin {
        margin-bottom: 171px;
    }
</style>