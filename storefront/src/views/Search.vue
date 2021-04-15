<template>
  <div>
    <div class="banner">
      <p>Search Jobs</p>
    </div>
        <div class="container search">
          <div class="input">
             <div>Job Title: <input type="text" v-model="searchTitle" placeholder="e.g. Manager" /></div>
             <div>Location: <input type="text" v-model="searchTown" placeholder="e.g Skipton" /></div>
          </div>
            <div class="sort">
              <div>
                <h4>Sorted by:</h4>
                  <button @click="filterName">Name</button>
                  <button @click="filterDate">Date</button>
                  
                <select>
                  <option value="sort">sort</option>
                 <option @click="filterName">Name</option>
                </select>
              </div>
            <div class="arrange heart">
                <button v-on:click="arrange = !arrange"><font-awesome-icon :icon="['fas', 'bars']"/> </button>
                <a href="/favourites"><b-icon class="h4 mt-1" icon="suit-heart-fill"></b-icon></a>
            </div>
            </div>
      </div>
      <div class="container">
      <ul :class="arrangeBox">
        <li v-for="item in filteredJobs" v-bind:key="item._id" class="list">
            <div class="vacancies">
                <h5>{{ item.vacancyTitle }}</h5>
                <p><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{ item.town }}</p>
                <p>{{ item.startDate }}</p>
                <div class="text">
                  <p><span>Contract Type:</span> Permanent</p>
                  <p><span> Working Pattern:</span> Full Time</p>
                  <p><span> Salary: </span> {{ item.salary }}</p>
                </div>  
              </div>
              <div class="view">
                <div v-if="item.favourite === true">
                  <b-icon v-on:click="removeFavourite($event, item._id)" icon="suit-heart-fill" class="h4 mt-2"></b-icon>
                </div>
                <div v-if="item.favourite === false">
                  <b-icon v-on:click="addFavourite($event, item._id)" icon="heart" class="h4 mt-2"></b-icon>
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
        arrange: false,
        arrayItem: [],
        searchTitle: '',
        searchTown: '',
        date: ''
    }
  },
  methods: {
      async getJobs() {
      await axios.get('http://localhost:4000/api/jobs')
      .then(res => { this.arrayItem = res.data })
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
        filteredTitle: function(){
            return this.arrayItem.filter((item) => {
                return item.vacancyTitle.toLowerCase().match(this.searchTitle);
            });
        },
        filteredTown: function(){
            return this.arrayItem.filter((item) => {
                return item.town.toLowerCase().match(this.searchTown);
            });
        },
          filterName: function() {
             function compare(a, b) {
            if (a.vacancyTitle < b.vacancyTitle)
              return -1;
            if (a.vacancyTitle > b.vacancyTitle)
              return 1;
            return 0;
            }
          return this.arrayItem.sort(compare);
        },
          filterDate: function() {
             function compare(a, b) {
            if (a.startDate < b.startDate)
              return -1;
            if (a.startDate > b.startDate)
              return 1;
            return 0;
            }
          return this.arrayItem.sort(compare);
        }
    },
    computed: {
      filteredJobs: function() {
        return this.filteredTitle(this.filteredTown(this.arrayItem))
        // return this.filteredTown(this.arrayItem);
      },
      arrangeBox(){
            return{
                arrange: this.arrange,
            }
        },
    },
      beforeMount() {
      this.getJobs();
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
    svg {
        cursor: pointer;
    }
  }
  .text {
    display: block;
  }
}

.heart {
    display: flex;
    justify-content: space-evenly;
    svg {
          font-size: 28px;
    }
}


.search {
  margin-bottom: 20px;
}

.input {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 15px 0 15px 10px;
  margin: 10px 0;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  input {
    width: 86%;
    margin-left: 3px;
  }
}

.sort {
  background-color: #e2f3f8;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 15px 0 15px 10px;
  margin: 10px 0;
  div {
    display: flex;
    align-items: center;
  }
  h4 {
    font-size: 20px;
    margin-top: 5px;
  }
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

.container .list {
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
}

select {
  padding: 5px 20px;
  border-radius: 8px;
  margin-left: 10px;
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
