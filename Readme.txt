//To Run install

npm init -y
npm install express
npm install cors
npm install mongoose

//to run server 
node index.js

//to test
go to tests->test.http


<template>
    <div class="container mt-4" @submit="PostData" method="post">
        <h2>Create Account</h2>
        <div class="row mt-4 mb-3">
          <div class="col-sm">
            <label>First name</label>
                <b-form-input v-model="posts.firstname" name="firstname" placeholder="Simon"></b-form-input>
            </div>
            <div class="col-sm">
                <label>Sirname</label>
                <b-form-input v-model="posts.Sirname" name="Sirname" placeholder="Firth"></b-form-input>
            </div>
            </div>
            <div class="mt-3 mb-3">
                <label>Username</label>
                <b-form-input v-model="Username" placeholder="admin"></b-form-input>
            </div>
            <div class="mt-3 mb-3">
                <label>Email</label>
                <b-form-input v-model="Email" placeholder="name@example.com"></b-form-input>
            </div>
            <div class="mt-3 mb-3">
                <label>Postal Code </label>
                <b-form-input v-model="PostCode" placeholder="bb8 7ns"></b-form-input>
            </div>
            <div class="mt-3 mb-3">
                <label>Password</label>
                <b-form-input v-model="Enter" placeholder="Password"></b-form-input>
            </div>
            <div class="mt-3 mb-3">
                <label>Re-enter Password</label>
                <b-form-input v-model="ReEnter" placeholder="Re-enter Password"></b-form-input>
            </div>
            <div class="mt-4 mb-3">
              <b-button variant="primary" type="submit">Create Account</b-button>
            </div>
    </div>
</template>

<script>
    export default {
        name: "AccountView",
    data() {
      return {
        posts: {
        firstname: null,
        Sirname: null,
        Username: '',
        Email: '',
        Enter: '',
        ReEnter:'',
        PostCode: ''
        }
      }
    },
    methods: {
        PostData(e) {
            console.log("this.posts")
            e.preventDefault();
            
        }
    },

}
</script>

<style scoped>

</style>