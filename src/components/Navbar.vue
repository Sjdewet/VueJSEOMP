<template>
    <div>
<router-link to=""></router-link>
<nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SDEWET</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
                <router-link class="p-3 text-decoration-none nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="p-3 text-decoration-none nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="p-3 text-decoration-none nav-link" to="/products">Educaation and Experience</router-link>
            </li>
            <li class="nav-item">
                <router-link class="p-3 text-decoration-none nav-link" to="/products">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link class="p-3 text-decoration-none nav-link" to="/contact">Testimonials</router-link>
            </li>
            <li class="nav-item">
                <router-link class="p-3 text-decoration-none nav-link" to="/contact">Contact Me</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>