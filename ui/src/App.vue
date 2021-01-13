<template>
  <div id="app">
    <Header></header>
    <Vacancies></Vacancies>
  </div>
</template>

<script lang="ts">
import Header from './components/Header';
import Vacancies from "./components/Vacancies";

export default {
  name: "App",
  components: {
    Header,
    Vacancies,
  }
};
</script>

<style scoped>

</style>
