<template>
  <div id="app">
    <Header></Header>
    <!-- <transition name="view"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header
  },
  mounted() {
 
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .background{
    min-height: calc(100vh - 88px);
  }
}
  // .view-enter-active, .view-leave-active {
  //   transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  // }
  // .view-enter-active {
  //   transition-delay: 0.5s;
  // }
  // .view-enter, .view-leave-to {
  //   opacity: 0;
  //   // transform: translateX(-100px);
  // }
  // .view-enter-to, .view-leave {
  //   opacity: 1;
  //   // transform: translateX(0);
  // }
</style>
