<template>
    <div class="projects mt-6">
        <div class="row my-3">
          <h1 class="heading">Projects</h1>
        </div>
        <div class="container">
          <div class="row justify-content-center gap-3">
            <div
              class="card p-0 "
              v-for="projects in projects"
              style="width: 20rem"
              :key="projects.id"
            >
              <img
                :src="projects.image"
                loading="lazy"
                class="card-img-top"
                :alt="projects.name"
              />
              <div class="card-body">
                <h4 class="card-text">
                  {{ projects.title }}
                </h4>
                <a :href="projects.Github" target="_blank">Github Link</a>
                <a :href="projects.Netlify" target="_blank">Netlify Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>    
</template>

<script>
    export default {
        computed: {
          projects(){
            return this.$store.state.projects
          }
        },
        mounted(){
          this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>
a {
    margin: 1rem;
}
.mt-6{
    margin-top: 6rem;
  }
  .row{
    border: 1px solid rgb(255, 255, 255);
  }
  .heading{
    color: white;
  }
  .card{
    border: 3px solid #013a63;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
  }
  .text-center {
    color: white;
  }

</style>