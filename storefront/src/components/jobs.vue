<template>
  <div>
      <div class="container">
      <ul>
        <li v-for="item in arrayItem.slice(0, 3)" v-bind:key="item._id" class="list">
            <div>
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
                  <font-awesome-icon :icon="['fas', 'chevron-right']"/>
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
  name: 'Jobs',
  data() {
    return {
        arrayItem: [],
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
      }
    },
    computed: {
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

.view {
    display: flex;
    justify-content: space-between;
    padding: 0 0 25px 0px;
    align-items: center;
    flex-direction: column;
}

.container {
    text-align: left;
    .list {
background: #fff;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.14901960784313725);
    }
  ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
  }
  li {
      margin-right: 20px;
  }
}

span {
    font-weight: bold;
}

</style>
