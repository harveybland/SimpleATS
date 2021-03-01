<template>
    <div>
        <div class="header mb-4">
        <div class="vac">
            <router-link to="/Vacancies">View</router-link>
            <router-link to="/NewVacancy">Create</router-link>
            <router-link to="/search">Search</router-link>
        </div>
        </div>
        <h1>Search Page</h1>
    </div>
</template>

<script>
    export default {
        name: 'Search'
    }
</script>

<style scoped>
  .header {
    padding: 0 40px
  }
  .vac {
    display: flex;
    justify-content: end;
    padding-top: 10px;
  }
  .vac a {
    color: #000 !important;
    padding: 15px 10px;
    text-decoration: none;
  }
  .vac a:hover{
    background: #fff;
    opacity: 0.7;
    transition: .7s;
  }
  a.router-link-active {
    background: #fff;
    padding: 15px 10px;
    color: #000 !important;
  }
</style>