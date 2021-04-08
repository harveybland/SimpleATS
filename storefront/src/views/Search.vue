<template>
  <div>
    <div class="banner">
      <p>Search Jobs</p>
    </div>
        <div class="container">
          <div class="sort"> 
          <input type="text" v-model="search" placeholder="Search Job Title" />
            <div class="date">
                 <input type="date" v-model="startDate" class="first">
                 <input type="date" v-model="endDate">
            </div>
            <div class="arrange">
                <button v-on:click="arrange = !arrange"><b-icon class="h4" icon="filter-square" aria-hidden="true"></b-icon></button>
                <b-icon class="h4 mt-1" icon="suit-heart-fill"></b-icon>
            </div>
          </div>
      </div>
      <div class="container">
      <ul :class="arrangeBox">
        <li v-for="item in filteredJobs" v-bind:key="item._id">
            <div class="vacancies">
                <h5>{{ item.vacancyTitle }}</h5>
                <p>{{ item.companyName }} {{ item.town }}</p>
                <p>{{ item.startDate }}</p>
                <div class="text">
                  <p><span>Contract Type:</span> Permanent</p>
                  <p><span> Working Pattern:</span> Full Time</p>
                  <p><span> Salary: </span> {{ item.salary }}</p>
                </div>  
              </div>
              <div class="view">
                <div>
                  <b-icon icon="heart" class="h4 mt-2"></b-icon>
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
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
        startDate: null,
        endDate: null,
        arrange: false,
        arrayItem: [],
        search: ''
    }
  },
  methods: {
      async getJobs() {
      await axios.get('http://localhost:4000/api/jobs')
      .then(res => { this.arrayItem = res.data })
    }
    },
      beforeMount() {
        this.getJobs();
    },
    computed: {
        arrangeBox(){
            return{
                arrange: this.arrange,
            }
        },
        filteredJobs: function(){
            return this.arrayItem.filter((item) => {
                return item.vacancyTitle.match(this.search);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.arrange {
    display: grid;
    grid-template-columns: 1fr 1fr;
  li {
    margin-right: 20px;
  }
   button {
    border: none;
    background-color: transparent;
  }
  .view {
    padding: 45px 0 0 0;
  }
  .text {
    display: block;
  }
}

.sort {
  background-color: #e2f3f8;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  padding: 15px 0 15px 10px;
  margin: 10px 0 30px 0;
}

.date {
  display: grid;
  padding: 0 0 0 10px;
  grid-template-columns: 1fr 1fr;
  .first {
    margin-right: 10px;
  }
}

.view {
  display: flex;
  justify-content: space-around;
  padding: 25px 0 0 0;
}

.vacancies {
  text-align: left;
}

.container li {
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
}
  .banner {
    background-color: #3c6473;
    font-size: 22px;
    padding: 15px 0;
    color: #fff;
  }

  .text {
    display: flex;
    p {
      padding-right: 20px;
    }
  }

  span {
    font-weight: bold;
  }

</style>
