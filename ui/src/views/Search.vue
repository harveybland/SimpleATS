<template>
    <div>
        <div class="header mb-4">
        <div class="routes">
            <router-link to="/Vacancies">View</router-link>
            <router-link to="/NewVacancy">Create</router-link>
            <router-link to="/search">Search</router-link>
        </div>
        </div>
        <div class="container account mt-5 animate__animated animate__fadeInUp">
        <div class="title">
            <h4 class="pt-3 pb-3 mb-0">Search Page</h4>
        </div>
      <b-form class="search mt-4 ml-5 mb-3 mr-5">
        <div class="flexL">
            <b-form-group>
                <label>Vacancy Title</label>
              <b-form-input placeholder="Developer" class="form-control"></b-form-input>
          </b-form-group>

          <b-form-group>
                <label>Vacancy Id</label>
              <b-form-input placeholder="123" type="password"  class="form-control"></b-form-input>
          </b-form-group>

            <b-form-group>
                <label>Location</label>
              <b-form-input placeholder="Locations" class="form-control"></b-form-input>
          </b-form-group>
        </div>
        <div class="flexR">
          <b-form-group>
                <label>Recruitment User</label>
              <b-form-input placeholder="Recruitment User" type="password"  class="form-control"></b-form-input>
          </b-form-group>

            <b-form-group>
                <label>Line manager</label>
              <b-form-input placeholder="admin" class="form-control"></b-form-input>
          </b-form-group>

          <b-form-group>
                <label>Vacancy Status</label>
              <b-form-input placeholder="Status" type="password"  class="form-control"></b-form-input>
          </b-form-group>
        </div>
      </b-form>
        <b-button class="mb-4" type="submitted" @click.prevent="search">Search</b-button>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Search'
    }
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss'; 
  .search {
    display: flex;
    .flexL {
    width: 50%;
    margin-right: 50px;
  }
    .flexR {
    width: 50%;
  }
}
label {
  display: flex;
}
</style>