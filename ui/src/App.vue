<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ul id="example-1">
      <li v-for="item in arrayItem" v-bind:key="item.vacancyTitle">
        {{ item.vacancyTitle }}<br />
        {{ item.companyName }}<br />{{ item.city }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
var jobArray = [
  {
    vacancyTitle: "test",
  },
];
import HelloWorld from "./components/HelloWorld.vue";
import { getJobListing } from "./services/jobs.service";

export default {
  name: "App",
  data() {
    return {
      arrayItem: jobArray,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    async getJobs() {
      const res = await getJobListing();
      this.data = res;
      jobArray.splice(0, jobArray.length);
      jobArray.push(...res);
    },
  },
  beforeMount() {
    this.getJobs();
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  display: block;
  border-bottom: solid 1px #000;
}
</style>
