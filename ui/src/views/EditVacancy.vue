<template>
    <div class="background">
      <div class="container">
        <div class="mb-4 mt-4">
          <h2>Edit Vacancy</h2>
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
                 @click="editVacancy">Uodate
            </b-button>
           </b-form>
        </div>
      </div>
  </div>
</template>

<script>
import { HttpService } from "@/services/http.service";
export default {
    name: 'EditVacancy',
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
  editVacancy() {
    this.id = this.$router.currentRoute.params.id;
    HttpService.httpPut("job/" + this.id)
    .then(res => {
      const newVac = res.data.id;
      console.log(newVac)
  })
  .catch(err => {
    console.log(err)
  })
}
  }
}
</script>

<style scoped>
  label {
    display: flex;
  }
</style>