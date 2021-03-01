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
    }
</script>

<style lang="scss" scoped>
    .header {
        padding: 0 40px
    }
.vac {
    display: flex;
    justify-content: end;
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