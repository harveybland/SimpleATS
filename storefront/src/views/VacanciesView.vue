<template>
  <div>
      <li>
        <div class="container">
            <div class="head"> 
              <h4>Vacancy Details</h4>
            </div>
          <ul class="box">
          <li>
            <div class="flexL">
              <div>
                <label>Job Title</label>
                <p>{{ arrayItem.vacancyTitle }}</p>
              </div>
              <div>
                <label>Company</label>
                <p>{{ arrayItem.companyName }}</p>
              </div>
              <div>
                <label>Street</label>
                <p>{{ arrayItem.street }}</p></div>
              </div>        
            <div class="flexR">
              <div>
                <label>City</label>
                <p>{{ arrayItem.city }}</p>
              </div>    
              <div>
                <label>Town</label> 
                <p> {{ arrayItem.town }} </p>
              </div>    
              <div>
                <label>Postcode</label>
                <p> {{ arrayItem.postcode }}</p>
              </div>    
            </div>
          </li>
          </ul>
        </div>
      </li>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Vacancy",
  data() {
    return {
        arrayItem: {
        firstname: '',
        surname: '',
        address: '',
        city: '',
        postcode: '',
        county: '',
        DOB: '',
        age: '',
        mobile: '',
        emailaddress: '',
      }
    };
  },
   methods: {
    getJob() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4000/api/job/' + this.id)
       .then(res => { this.arrayItem = res.data})
    },
    },
    beforeMount() {
    this.getJob();
  }
};
</script>

<style scoped>

</style>