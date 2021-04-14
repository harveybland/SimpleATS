<template>
  <div>
    <div class="banner">
      <router-link :to="{ path: '/VacanciesView/' + arrayItem._id }" class="nav"><b-icon class="h2" icon="arrow-left"></b-icon>
       </router-link>
      <p>The perfect job is waiting...</p>
    </div>
        <div class="container">
            <ul>
            <li class="box">
              <div class="flexL">
                  <h5>{{ arrayItem.vacancyTitle }}</h5>
                  <p>{{ arrayItem.companyName }}</p>
                  <p><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{ arrayItem.town }}</p>
                  <div class="info">
                    <p><span>Type:</span> Permanent</p>
                    <p><span>Working Pattern:</span> Full Time</p>
                    <p><span>Salary:</span> {{ arrayItem.salary }}</p>
                  </div>
              </div>   
              <div class="flexR">
                  <p>Map</p>
              </div>
            </li>
            </ul>
        <div class="contain">
          <div>
            <h2>Quick Apply</h2>
          </div>
              <div class="apply mt-3">
                <b-form-group class="displaynone">
                      <label>id</label>
                      <b-form-input v-model="arrayItem._id"></b-form-input>
                </b-form-group>
              <b-form-group>
                      <label>First Name</label>
                      <b-form-input placeholder="Harvey" v-model="firstname"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Surname</label>
                    <b-form-input placeholder="Bland" v-model="surname"></b-form-input>
                </b-form-group>
                     <b-form-group>
                      <label>Postcode</label>
                      <b-form-input placeholder="bb8 7ns" v-model="postcode"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Mobile</label>
                    <b-form-input placeholder="0795445590" v-model="mobile"></b-form-input>
                </b-form-group>
                     <b-form-group>
                      <label>Email</label>
                      <b-form-input placeholder="harvey.bland@genius.online" v-model="emailaddress"></b-form-input>
                </b-form-group>
                <b-form-group>
                    <label>Current Employer</label>
                    <b-form-input placeholder="Simon" v-model="currentEmployer"></b-form-input>
                </b-form-group >
                     <b-form-group>
                      <label>Current Job Title</label>
                      <b-form-input placeholder="Developer" v-model="currentJobTitle"></b-form-input>
                </b-form-group>
              <div style="text-align: center;">
                <b-button class="mb-3" variant="info" @click.prevent="apply">Apply</b-button>
              </div>
              </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "apply",
  data() {
    return {
        arrayItem: {
          _id: ''
        },
        firstname: '',
        surname: '',
        postcode: '',
        mobile: '',
        emailaddress: '',
        currentEmployer: '',
        currentJobTitle: '',
        applicationStatusId: '604a033e9448df2d9810ee20',
      }
  },
   methods: {
    getJob() {
      this.id = this.$router.currentRoute.params.id;
      axios.get('http://localhost:4000/api/job/' + this.id)
       .then(res => { this.arrayItem = res.data})
    },
    apply() {
        const body = { jobid: this.$data.arrayItem._id, firstname: this.$data.firstname, surname: this.$data.surname,
        postcode: this.$data.postcode, mobile: this.$data.mobile, emailaddress: this.$data.emailaddress,
        currentEmployer: this.$data.currentEmployer, currentJobTitle: this.$data.currentJobTitle,
        applicationStatusId: this.$data.applicationStatusId };
        this.id = this.$router.currentRoute.params.id;
        axios.post('http://localhost:4000/api/apply/' + this.id, body)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
        console.log(error);
        })
    }
    },
    beforeMount() {
    this.getJob();
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';
  .banner {
    padding: 15px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    a {
      display: flex;
      color: #fff;
    }
  }
  .box {
    margin: 20px 0 0 0;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .flexL {
    text-align: left;
  }

  .info {
    padding: 10px 0;
    p {
      margin-bottom: 5px;
    }
    span {
      font-weight: bold;
    }
  }

  .contain {
  box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
  padding: 20px;
  text-align: left;
  }

  .apply {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .form-group {
      margin-right: 20px;
    }
  }

  .displaynone {
    display: none;
  }

</style>