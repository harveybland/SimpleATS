<template>
<div class="home">
    <div class="container home">
          <div>
            <h3 class="mb-5 text">Simple ATS</h3>
            <!-- <div v-if="!user">
                <h3>Please <router-link to="/Login">Sign in</router-link></h3>
            </div>
            <div v-if="user">
                <h5>Welcome user</h5>
            </div> -->
          <div class="data">
              <div>
                  <h4>Total Candidates</h4>
                  <p>{{  }}</p>
                </div>
              <div class="text">
                <h4>Open Vacancies</h4>
                <p>{{  }}</p>
              </div>
              <div class="text">
                <h4>Appointed</h4>
                <p>{{  }}</p>
              </div>
          </div>
      </div>
    <transition>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eos quod aut molestias tenetur. Nisi minus aspernatur eveniet ab corrupti officia deserunt, soluta ratione beatae iusto? Quos voluptate harum consectetur!</p>
    </transition>
    </div>
</div>
</template>

<script>
let job = { vacancyTitle: "test" };
import { HttpService } from "@/services/http.service";
import { gsap } from "gsap";
export default {
      name: 'Home',
      data() {
        return {
          arrayItem: job
        }
      },
      // methods: {
      //   async getJobs() {
      //   const res = await HttpService.httpGet("jobs");
      //   jobArray.splice(0, jobArray.length);
      //   jobArray.push(...res);
      // }
      // },
      //   beforeMount() {
      //     this.getJobs();
      // },
      created() {
        if (localStorage.getItem('token') === null) {
          this.user = false
        } else {
          this.user = true
        };
      },
      mounted() {
        gsap.to('.text', {y: 100, duration: 3})
      }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
  .home {
    background-color: #e2f3f8;
    height: 93.5vh;
  }
  .data {
    display: flex;
    justify-content: space-between;
  }
</style>