<template>
  <div id ="bg">
    
    <img src = "@/assets/logo.png" id="thelogo"/>
     <img src = "@/assets/schoolBus.png" id = "bus"/>
       </div>
  
</template>

<script>
export default {




}
</script>

<style>

@font-face {
	font-family: 'Lato';
	src: url('~@/assets/fonts/Lato/Lato-Regular.ttf'); 
	src: 
		local('Lato-Regular'),
		url('~@/assets/fonts/Lato/Lato-Regular.ttf') 
		format('truetype');
}
/*bold version*/
@font-face {
	font-family: 'Lato';
	src: url('~@/assets/fonts/Lato/Lato-Regular.ttf'); 
	src: 
		local('Lato-Bold'),
		url('~@/assets/fonts/Lato/Lato-Regular.ttf') 
		format('truetype');
	font-weight: bold;
}
@font-face {
	font-family: 'OpenSans';
	src: url('~@/assets/fonts/OpenSans/OpenSans-Regular.ttf'); 
	src: 
		local('Opensans-Regular'),
		url('~@/assets/fonts/OpenSans/OpenSans-Regular.ttf') 
		format('truetype');
}
/*bold version*/
@font-face {
	font-family: 'OpenSans';
	src: url('~@/assets/fonts/OpenSans/OpenSans-Bold.ttf'); 
	src: 
		local('OpenSans-Bold'),
		url('~@/assets/fonts/OpenSans/OpenSans-Bold.ttf') 
		format('truetype');
	font-weight: bold;
}
div{
  font-family: 'Lato';
}
h1{
  font-size: 5vh; 
  font-weight: bold; 
}
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
  height: 100%; 
  background-image: url("~@/assets/background1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover; 
  -moz-background-size: cover; 
  -o-background-size: cover; 
   background-position: center center;
  background-attachment: fixed; 
  z-index: -1;
}
#thelogo{
  display:block;
  opacity: 0; 
  margin:0 auto;
  padding-top: -200vh; 
  width: 40vw; 
  height: auto; 
  position: relative;
  z-index: 2; 
  animation-name: showLogo; 
  animation-duration: 1s; 
  animation-fill-mode: forwards; 
  animation-delay: 1s;
}

@-webkit-keyframes showBus{
   from  {opacity: 0.2; right: 0vw; }
 to {opacity: 1; right: 30vw;}
}

/* Standard syntax */
@keyframes showBus {
   from  {opacity: 0.2; right: 0vw; }
 to {opacity: 1; right: 15vw;}
}
/* Standard syntax */
#bus{ 

  position: absolute; 
  opacity: 0; 
  margin:0;
  right: 0vw;
  width: 40vw;
  top: -webkit-calc(53vh + 100px);
  top: calc(53vh + 100px); 
  height: auto; 
  z-index: 1; 
  animation-name: showBus; 
  animation-duration: 1s; 
  animation-fill-mode: forwards; 
  animation-delay: 1.5s;


}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes showLogo {
   from  {opacity: 0.2; padding-top: -200vh;}
 to {opacity: 1; padding-top: 10vh;}
}

/* Standard syntax */
@keyframes showLogo {
   from  {opacity: 0.2; padding-top: -200vh;}
 to {opacity: 1; padding-top: 10vh;}
}
@media screen and (max-width: 1500px)
{
#thelogo{

  width: 60vw;
}

}
@media screen and (max-width: 430px)
{
  @-webkit-keyframes showLogo {
   from  {opacity: 0.2; padding-top: -200vh;}
 to {opacity: 1; padding-top: 20vh;}}
/* Standard syntax */
@keyframes showLogo {
   from  {opacity: 0.2; padding-top: -200vh;}
 to {opacity: 1; padding-top: 20vh;}


}


}
@media screen and (min-width: 1109)
{
  #bus{
     top: -webkit-calc(63vh + 100px);
  top: calc(63vh + 100px); 
  }

}

</style>