<template>
    <div>
        <div class="mt-5 container " style="width: 50rem;">
            <div class="row gap-2">
                <h1 style="padding-top:3rem;" class="text">Testimonials</h1>
                <div class="" v-for="data in testimonials" :key="data.ID">
       <div class="card" style="border:3px solid black;">
           <div class="row">
               <div class="col-4">
                   <img :src="data.image" style="width:12rem; margin-top:1rem;margin-bottom:1rem;" class="card-img-top" loading="lazy">
               </div>
               <div class="col-8">
                   <div class="card-body">
                   <h5>{{data.Name}}</h5>
                   <p>{{data.test}}</p>
                  </div>
               </div>
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
        testimonials(){
          return this.$store.state.testimonials
          }
        },
        mounted(){
          this.$store.dispatch('fetchTestimonials')
        }
    }
</script>

<style scoped>
.text{
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
  }
</style>