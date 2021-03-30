<template>
  <div>
    <div class="banner">
      <p>Search Jobs</p>
    </div>
        <div class="container">
          <div class="sort"> 
            <div class="by">
              <h5>Sort by:</h5>
              <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
            </div>
            <div>
              <b-button variant="info" @click.prevent="search()">Search</b-button>
            </div>
            <div class="arrange">
                <button v-on:click="arrange = !arrange"><b-icon class="h4" icon="filter-square" aria-hidden="true"></b-icon></button>
                <b-icon class="h4" icon="suit-heart-fill"></b-icon>
            </div>
          </div>
      </div>
      <div class="container">
      <ul :class="compClasses">
        <li v-for="item in arrayItem" v-bind:key="item._id">
            <div class="vacancies">
                <h5>{{ item.vacancyTitle }}</h5>
                <p>{{ item.companyName }} {{ item.town }}</p>
                <p>Contract Type: Permanent &nbsp; Working Pattern:Full Time &nbsp; Salary:{{ item.salary }}</p>
              </div>
              <div class="view">
                <div>
                  <b-icon icon="heart" class="h4"></b-icon>
                </div>
                <div>
                  <router-link :to="{ path: '/VacanciesView/' + item._id }" class="nav">
                  <h6>View</h6>
                  </router-link>
                </div>
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
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
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

.arrange button {
  border: none;
  background-color: transparent;
}

.sort {
  background-color: #e2f3f8;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  padding: 15px 0;
  margin: 10px 0 30px 0;
}

.by {
  display: grid;
  grid-template-columns: 1fr 7fr;
}

.view {
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
}

.vacancies {
  text-align: left;
}

.container li {
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-bottom: 25px;
  padding: 11px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
}
  .banner {
    background-color: #3c6473;
    font-size: 22px;
    padding: 15px 0;
    color: #fff;
  }
  .h4 {
    margin: 0;
  }
  h5 {
    color: #3c6473;
    margin: 0 0 10px 0;
  }
  h6 {
    background-color: #17a2b8;
    padding: 10px 25px;
    border-radius: 8px;
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
