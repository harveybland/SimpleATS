<template>
  <div>
    <div class="banner">
      <p>Search Jobs</p>
    </div>
        <div class="container">
            <ul>
            <li class="box">
              <div class="flexL">
                  <h5>{{ arrayItem.vacancyTitle }}</h5>
                  <p>{{ arrayItem.companyName }} {{ arrayItem.town }}</p>
                  <p>Contract Type: Permanent &nbsp; Working Pattern:Full Time &nbsp; Salary:{{ arrayItem.salary }}</p>
                  <b-button variant="info" class="mt-3">Apply</b-button>
              </div>   
              <div class="flexR">
                  <p>Map</p>
              </div>
            </li>
            </ul>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Vacancy",
  data() {
    return {
        arrayItem: ''
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

<style lang="scss" scoped>
@import '@/styles/styles.scss';
  .banner {
    background-color: #3c6473;
    font-size: 22px;
    padding: 15px 0;
    color: #fff;
  }
  .box {
    margin: 20px 0;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .flexL {
    text-align: left;
  }


</style>