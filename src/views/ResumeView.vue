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

  <!-- <div class="container">
    <u class="u-tag">
      <h1 class="text-center h1 mt-6">EDUCATION AND EXPERIENCE</h1>
    </u>
    <div class="row">
      <div
        class="col-12 col-md-6 mb-3 mb-sm-0 mt-5"
        v-for="data in education"
        :key="data.id"
      >
        <div class="card h-100">
          <div class="d-flex justify-content-center">
            <img
              :src="data.image"
              class="card-img-top"
              style="max-width: 10rem"
              alt=""
            />
          </div>
          <div class="card-body">
            <p class="card-text">{{ data.title }}</p>
            <h6 class="card-title">{{ data.Education }}</h6>
            <a href="https://sphigh.org/" class="btn btn-primary"
              >Find out more</a
            >
          </div>
        </div>
      </div>
    </div>

  
    
  </div>
  <div>
  </div> -->

  <div class="container" style="margin-top: 6rem">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col"  v-for="data in education" :key="data.id">
        <div class="card h-100">
          <div class="d-flex justify-content-center">
            <img
              :src="data.image"
              class="card-img-top"
              style="width: 9rem"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text">{{ data.Education }}</p>
          </div>
        </div>
    </div>
    </div>

    <div class="skills">
      <u class="u-tag">
        <p class="text-center h1">SKILLS</p>
      </u>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col"  v-for="data in skills" :key="data.id">
          <div class="card h-100">
            <div class="d-flex justify-content-center">
              <img
                :src="data.image"
                class="card-img-top"
                style="width: 9rem"
                alt="..."
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ data.title }}</h5>
              <p class="card-text">{{ data.skillLevel }}</p>
              <p class="card-text">{{ data.desc }}</p>
            </div>
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
      return this.$store.state.skills;
    },
    education() {
      return this.$store.state.education;
    },
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchSkill");
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<style scoped>
.mt-6 {
  margin-top: 6rem;
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
  box-shadow: 0 6px 10px rgba(119, 34, 34, 0.08), 0 0 6px #013a63; ;
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
