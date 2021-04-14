<template>
  <div>
    <div class="banner">
      <a href="/"><b-icon class="h2" icon="arrow-left"></b-icon></a>
      <p>Search Jobs</p>
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
                  <div class="apply">
                    <router-link :to="{ path: '/apply/' + arrayItem._id }" class="nav"><h6 class="mr-3">Apply</h6>
                    </router-link>
                    <div v-if="arrayItem.favourite === true">
                    <b-icon v-on:click="removeFavourite($event, arrayItem._id)" icon="suit-heart-fill" class="h4 mt-2"></b-icon>
                    </div>
                    <div v-if="arrayItem.favourite === false">
                      <b-icon v-on:click="addFavourite($event, arrayItem._id)" icon="heart" class="h4 mt-2"></b-icon>
                    </div>
                  </div>
              </div>   
              <div class="flexR">
                  <p>Map</p>
                  <img src="" alt="">
              </div>
            </li>
            </ul>
        </div>
        <div class="moreJobs">
          <div>
            <h2>Jobs you may like</h2>
          </div>
          <Jobs></Jobs>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import Jobs from "../components/jobs.vue"
export default {
  name: "Vacancy",
  components: {
    Jobs
  },
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
    addFavourite(event, _id) {
    console.log(event, _id)
    const body = { _id: event }
    axios.put('http://localhost:4000/api/favJob/' + _id, body)
    .then(res => {
      location.reload();
      console.log(res)
    })
  },
    removeFavourite(event, _id) {
    console.log(event, _id)
    const body = { _id: event }
    axios.put('http://localhost:4000/api/unfavJob/' + _id, body)
    .then(res => {
      location.reload();
      console.log(res)
    })
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
    padding: 15px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    a {
      display: flex;
      color: #fff;
    }
  }
  .box {
    margin: 20px 0 50px 0;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .flexL {
    text-align: left;
  }

  .apply {
    display: flex;
    align-items: center;
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

  .moreJobs {
    background: #f4f4f4;
    padding: 15px 0;
  }

</style>