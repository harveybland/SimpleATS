<template>
    <div class="background">
    <h1>Vacancies Page</h1>
        <router-link :to="{name: 'VacanciesComponent'}" class="Vpage">Vacancies ̬</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "VacanciesView"
    }
</script>

<style scoped>
    .background {
    background: grey;
}
    .Vpage {
        color: #000;
        font-weight: bold;
        padding: 20px;
        font-size: 22px;
    }
    .Vpage:hover{
            color: #fff;
            text-decoration: none;
        }

</style>