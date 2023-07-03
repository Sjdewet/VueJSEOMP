<template>
  <!-- <div class="cards d-flex justify-content-center edu-flex">
    <div class="card m-5" style="width: 18rem;">
                <div class="card-img">
                    <img src="https://i.postimg.cc/mZJ89rf3/sp.png" id="img" alt="">
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <p>Education and Experience:</p>
                        <p>2018-2022 - South Peninsula High School</p>
                    </div>
                </div>
              </div>
       
    
              <div class="card m-5" style="width: 18rem;">
                <div class="card-img">
                    <img src="https://i.postimg.cc/d0VxBSWG/lc.jpg" id="img" alt="LIFE CHOICES LOGO">
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <p>Education and Experience:</p>
                        <p>2023-Current - Life Choices Coding Academy</p>
                      </div>
                    </div>
                  </div>
                </div> -->
                <u><p class="text-center h1">EDUCATION AND EXPERIENCE</p></u>
        <div>
          <div class="row">
            <div class="col-12 col-md-4" v-for="data in education" :key="data.id">
              <div class="card" style="width: 18rem">
                <img :src="data.image" class="card-img-top" alt="">
                <div class="card-body">
                  <br>
                  <h2 class="card-title">{{ data.title }}</h2>
                  <h6 class="card-title">{{ data.Education }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <u><p class="text-center h1">SKILLS</p></u>
        <div >
          <div class="row gap-1">
            <div class="col-12 col-md-4" v-for="data in skills" :key="data.id">
              <div class="card h-100" style="width: 18rem;">
                <div class="d-flex justify-content-center">
                  <img :src="data.image" class="card-img-top" style="width:9rem" alt="...">
                </div>
                <div class="card-body">
                  <p class="card-title">{{ data.title }}</p>
                  <p class="card-text>">Intermediate</p>
                </div>
              </div>
          </div>
      
      </div>
        </div>
</template>
<script>
    export default {
        computed: {
          skills(){
            return this.$store.state.skills
          },
          education(){
            return this.$store.state.education
          }
        },
        mounted(){
          this.$store.dispatch('fetchSkill')
          this.$store.dispatch('fetchEducation')
        }
    }
</script>

<style scoped>

</style>