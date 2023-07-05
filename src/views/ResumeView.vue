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
  <div>
    <u class="u-tag">
      <h1 class="text-center h1 mt-6">EDUCATION AND EXPERIENCE</h1>
    </u>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" v-for="data in education" :key="data.id">
          <div class="card " style="max-width: 18rem">
            <img :src="data.image" class="card-img-top" alt="">
            <div class="card-body">
              <br>
              <p class="card-text">{{ data.title }}</p>
              <h6 class="card-title">{{ data.Education }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <u class="u-tag">
    <p class="text-center h1">SKILLS</p>
  </u>
  <div class="skills">
    <div class="row ">
      <div class="col line" v-for="data in skills" :key="data.id">
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
    skills() {
      return this.$store.state.skills
    },
    education() {
      return this.$store.state.education
    },
    projects() {
      return this.$store.state.projects
    }
  },
  mounted() {
    this.$store.dispatch('fetchSkill')
    this.$store.dispatch('fetchEducation')
    this.$store.dispatch('fetchProjects')
  }
}
</script>

<style scoped>
.mt-6 {
  margin-top: 6rem;
}

.skills {
  border: 1px solid rgb(255, 255, 255);
}

.line {
  border: 3px solid #013a63;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}

.text-center {
  color: white;
}

.u-tag {
  color: white;
}

.card {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(119, 34, 34, 0.08), 0 0 6px rgba(0, 0, 0, .05);
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
}</style>