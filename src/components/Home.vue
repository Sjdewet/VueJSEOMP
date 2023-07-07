<template>
  <div class="mt-10 d-flex align-items-center" v-motion-pop>
    <div class="container">
      <div class="row">
        <h2 class="text-white">HELLO THERE!</h2>
        <div class="col-12 col-md-6 col-lg-4 m-auto">
          <div>
            <h3 class="display-3 px-5 text-white">SUMMER</h3>
            <h4 class="text-white">i am an aspiring <span class="text">web developer </span></h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div>
            <!-- <h2 class="text-white">HELLO THERE!</h2> -->
            <img src="https://i.postimg.cc/25LPmc3V/C12-C2-Summer-de-Wet-4.jpg" alt="web" width="350" height="500" class="image2" loading="lazy">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 m-auto">
          <div>
            <h3 class="display-3 px-5 text-white">DE WET</h3>
            <router-link to="/about"><button>ABOUT ME</button></router-link>
            <router-link to="/contact"><button>CONTACT ME</button></router-link>
          </div>
        </div>
      </div>

   
      
    
    </div>
  </div>
</template>


<script>
  export default {
      
  }
</script>

<style scoped>
  .mt-10{
    margin-top: 7rem;
  }
  .text{
    color: #013a63;
  }
</style>
