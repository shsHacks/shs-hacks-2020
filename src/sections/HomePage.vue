<template>
  <div id ="bg">
    <img src = "@/assets/logo.png" id="thelogo"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
template {
  height: 100%;
  margin: 0px; 
  padding: 0px; 
  top: 0px; 
}

#bg {
  margin: 0; 
  padding: 0; 
  border: 0; 
  top: 0px; 
  background-image: url("~@/assets/background1.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; 
  z-index: -1;
}
#thelogo{
  display: block;
  opacity: 0; 
  margin:0 auto;
  padding-top: 10vh; 
  width: 40vw; 
  height: auto; 
  z-index: 1; 
  animation-name: showLogo; 
  animation-duration: 2s; 
  animation-fill-mode: forwards; 
}
/* Safari 4.0 - 8.0 */
@keyframes showLogo {
  from{opacity: 0; padding-top: 0vh;}
  to {opacity: 1; padding-top: 10vh;}
}

/* Standard syntax */
@keyframes showLogo {
  from{opacity: 0; padding-top: 0vh;}
  to {opacity: 1; padding-top: 10vh;}
}

</style>