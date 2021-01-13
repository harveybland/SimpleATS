<template>
  <div id="app">
    <Header></header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from './components/Header';

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style scoped>

</style>
