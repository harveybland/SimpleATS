<template>
  <div>
    <div class="banner">
      <p>Search Jobs</p>
    </div>
      <div>
        <b-button variant="info" @click.prevent="search()">Search</b-button>
      </div>
      <div class="sort-color">
        <div class="container">
          <div class="sort"> 
            <div>
              <h5>Sort by:</h5>

            </div>
            <div>
                <button v-on:click="arrange = !arrange"><b-icon icon="filter-square" aria-hidden="true"></b-icon></button>
                <b-icon icon="suit-heart-fill" aria-hidden="true"></b-icon>
            </div>
          </div>
      </div>
      </div>
      <div class="container">
      <ul :class="compClasses">
        <li v-for="item in arrayItem" v-bind:key="item._id">
            <div class="vacancies">
              <h5>{{ item.vacancyTitle }}</h5>
                  <p>{{ item.companyName }} - {{ item.city }} - {{ item.town }}</p>
              </div>
              <div>
                <b-icon icon="heart" aria-hidden="true"></b-icon>
                <router-link :to="{ path: '/VacanciesView/' + item._id }" class="nav">
                  <h6>View</h6>
                </router-link>
              </div>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
let user = { vacancyTitle: 'test' };
import axios from 'axios';
export default {
  name: 'Search',
  data() {
    return {
        arrange: false,
        arrayItem: user,
    }
  },
  methods: {
    search() {
      console.log('Hello')
    },
      async getJobs() {
      await axios.get('http://localhost:4000/api/jobs')
      .then(res => { this.arrayItem = res.data })
    }
    },
      beforeMount() {
        this.getJobs();
    },
    computed: {
        compClasses(){
            return{
                arrange: this.arrange,
            }
        }
    }
}
</script>

<style scoped>


.arrange {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.arrange li {
  margin-right: 20px;
}

.sort button {
  border: none;
  background-color: transparent;
}

.sort-color {
  background-color: #e2f3f8;
}

.sort {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 15px 0;
  margin: 10px 0 30px 0;
}

.container li {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 25px;
  padding: 11px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
}
h6 {
  background-color: #17a2b8;
  padding: 10px 15px;
  border-radius: 8px;
  color: #fff;
}
  .banner {
    background-color: #3c6473;
    font-size: 22px;
    padding: 15px 0;
    color: #fff;
  }
  p {
    margin: 0;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
</style>
