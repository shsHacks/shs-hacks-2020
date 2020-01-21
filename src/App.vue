

<template>

  <div id="app" style ="height: 100%; width: 100%; margin: 0; padding: 0px;">
  <homepage style = "width: 100%; height: 100%; top: 0; margin: 0px; padding: 0px;"></homepage>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div id = "my-menu">
    
      <a href="#AboutHackathon">About shsHacks</a>
      <a href="#Location">Location</a>
      <a href="#Schedule">Schedule</a>
      <a href="#Register">Register</a>
      <a href = "#AboutUs"> Meet the Team</a>
       <a href = "#Contact"> Contact Us</a>
  </div>
  <div id = "menu-overlay" class="fixmenu">
     <a href="#AboutHackathon">About shsHacks</a>
      <a href="#Location">Location</a>
      <a href="#Schedule">Schedule</a>
      <a href="#Register">Register</a>
      <a href = "#AboutUs"> Meet the Team</a>
       <a href = "#Contact"> Contact Us</a>
  </div>
    <div id = "theContent">
      <div id = "AboutHackathon" class="filler">
        <p class = "centerme">AboutHackathon</p>
      </div>
     <location id="Location" :scroll="contentScroll" :color="colors.blue" class ="filler"/>
      <div id = "Schedule">
        <schedule id ="schedule" :scroll="contentScroll" :color ="colors.myGreen" class = "filler"/>
      </div>
      <div id = "Register" class="filler">
        <p class = "centerme">Register</p>
      </div>
      <div id = "Sponsors" class="filler">
        <p class = "centerme">Sponsors</p>
      </div>
      <div id = "AboutUs" class="filler">
        <p class = "centerme">AboutUs</p>
      </div>
      <div id = "Contact" class="filler">
        <contact></contact>
      </div>
    
    </div>
  </div>
   
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
 import Schedule from '@/sections/Schedule.vue';
import colors from '@/data/colors.json';
import homepage from '@/sections/HomePage.vue';
import Location from '@/sections/Location.vue';
import Contact from '@/sections/Contact.vue';
export default {

  data() {
    return {
      scroll: 0,
      topHeight: 0,
      menuHeight: 0,
      primaryColor: '#275d38',
      secondaryColor: '#c99700',
      colors,
    }},
  name: 'app',
  components: {
   Schedule, 
   homepage, 
   Location, 
   Contact
  //HelloWorld
  }
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("menu-overlay").style.top = "0";
  }
  
  else {
    document.getElementById("menu-overlay").style.top = "-140px";
  }
  if(document.body.scrollTop>500 || document.documentElement.scrollTop>500)
  {
document.getElementById("menu-overlay").style.backgroundColor= "rgba(255,224,25)";}
else 
{
  document.getElementById("menu-overlay").style.backgroundColor = "rgba(255,224,25, 0.75)";}



}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 100vh;
}

#theContent{
  margin-top:30em; 
  width: 100%; 
  height: auto; 
  display: flex; 
  flex-flow: column wrap; 
  justify-content: center;
}
.filler{
width: 100%; 
height: 100vh;
font-size: 22px; 
align-items: center;
 
}
#my-menu{
  font-weight: normal; 
  display: flex; 
  justify-content: space-around;
  flex-flow: row wrap; 
 z-index: 20; 
  background-color: transparent; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: 0px; /* was -50pxHide the navbar 50 px outside of the top view */
  width: 100%; /* Full width */
  height: 10vh; 
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
}
#menu-overlay{
  height: 8vh; 
  font-weight: bold; 
  display: flex; 
  justify-content: space-around; 
  background-color: rgba(255,224,25, 0.75); 
  position: fixed; 
  z-index: 18;
  top: -140px;  
  width: 100%; 
  -webkit-box-shadow: 0px 3px 5px 0px black;
-moz-box-shadow: 0px 3px 5px 0px black;
box-shadow: 0px 3px 5px 0px black;
  transition: top 0.3s;

}
.fixmenu a{

  visibility: hidden; 
  display: block;
  color: black;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  z-index: -325;

}

/* Style the navbar links */
#my-menu a {
  font-size: 3vh; 
  display: block;
  color: #176F1A;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}

#my-menu a:hover {
  color: blue;
}
.centerme{
  position: relative; 
  top: 50%; 
  left: 50%; 
   transform: translate(-50%, -50%);
}
#schedule{
  display: inline-block; 
  max-width: 75%; 
}
#Contact{
  height: auto; 
  margin-bottom: 0; 
}

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
</style>
