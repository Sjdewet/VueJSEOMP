<template>
 
  <div class="contact mt-5">
  
      <div class="container contactForm">
        <form action="https://formspree.io/f/xyyaonqq" method="POST" class="form">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label text-white">First Name:</label>
            <input type="First Name" name="FirstName" class="form-control" id="exampleFormControlInput1"
              placeholder="Name" />
          </div>
          <div class="mb-1">
            <label for="exampleFormControlInput1" class="form-label text-white">Last Name:</label>
            <input type="Last Name" name="LastName" class="form-control" id="exampleFormControlInput1" placeholder="Surname
            " />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label text-white">Email address:</label>
            <input type="email" name="email" class="form-control" id="exampleFormControlInput1"
              placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label text-white">Please leave a message:</label>
          </div>
          <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <div class="btns d-flex justify-content-between">
            <button class="formButton mt-3 butn1" type="reset">Clear</button>
            <button class="formButton mt-3 butn2" type="submit">Send</button>
            
          </div>
        </form>
      </div>

  </div>
 

</template>

<script>
export default {

}
</script>

<style scoped>

.contact{
  border: 1px solid rgb(255, 255, 255);
  width:50vw
}
.formButton{
  color: black;
  background-color: #013a63;
}
.h4{
  color: #013a63
}

.butn1{
  width: 15%;
}

.butn2{
  width: 15%;
}

@media only screen and (max-width: 420px){
  .contact {
    width: 17rem !important;
  }
  .form {
    margin: 1rem !important;
  }

  button{
    width: 3rem !important;
  }
}
</style>