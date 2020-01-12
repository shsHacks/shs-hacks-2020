

<template>
  <div id="app">
  
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <div id = "my-menu">
    
      <a href="#AboutHackathon">About shsHacks</a>
      <a href="#Location">Location</a>
      <a href="#Schedule">Schedule</a>
      <a href="#Register">Register</a>
      <a href = "#Sponsors"> Sponsors</a>
      <a href = "#Contact"> Contact Us</a>
      <a href = "#AboutUs"> Meet the Team</a>
  </div>
    <div id = "theContent">
      <div id = "AboutHackathon" class="filler">
        <p class = "centerme">AboutHackathon</p>
      </div>
      <div id = "Location" class="filler">
        <p class = "centerme">Location</p>
      </div>
      <div id = "Schedule" class="filler">
        <schedule id ="schedule"/>
      </div>
      <div id = "Register" class="filler">
        <p class = "centerme">Register</p>
      </div>
      <div id = "Sponsors" class="filler">
        <p class = "centerme">Sponsors</p>
      </div>
      <div id = "Contact" class="filler">
        <p class = "centerme">Contact</p>
      </div>
      <div id = "AboutUs" class="filler">
        <p class = "centerme">AboutUs</p>
      </div>
    </div>
  </div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Schedule from '@/sections/Schedule.vue';
export default {
  name: 'app',
  components: {
   Schedule
  //HelloWorld
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("my-menu").style.top = "0";
  } else {
    document.getElementById("my-menu").style.top = "-50px";
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#theContent{
  margin-top: 15em; 
  width: 100%; 
  height: auto; 
  display: flex; 
  flex-flow: column wrap; 
  justify-content: center;
  
}
.filler{
width: 100%; 
height: 500px;
font-size: 22px; 
align-items: center;
 
}
#my-menu{

 z-index: 1; 
  background-color: #333; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: -50px; /* Hide the navbar 50 px outside of the top view */
  width: 100%; /* Full width */
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
}

/* Style the navbar links */
#my-menu a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}

#my-menu a:hover {
  background-color: #ddd;
  color: blue;
}
.centerme{
  position: relative; 
  top: 50%; 
  left: 50%; 
   transform: translate(-50%, -50%);
}
</style>
