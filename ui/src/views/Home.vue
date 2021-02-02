<template>
    <div class="container home">
           <div class="text-center mt-5 text">
            <h2 class="mb-5">Simple ATS</h2>
            <h5>Please <router-link to="/Login">Sign in</router-link></h5>
        </div>
        <div>
            <p>You are signed in as {{  }}</p>
        </div>
    </div>
</template>

<script>

export default {
        name: 'Home',
    }
</script>

<style scoped>
     .text {
        height: 86vh;
    }
</style>