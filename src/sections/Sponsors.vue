<template>
  <div id = "sponsors">

<h1><u><b>Our Sponsors</b></u></h1>
<div id = "logos">
    
<div v-for="image in images" :key="image.id" :style="image.size">
<a :href="image.ref" target="_blank">
<img :src="image.source" class = "everylogo"/></a>
</div>
</div>
  </div>
</template>

<script>
var mobileVersion = false; 

if(window.innerHeight>window.innerWidth)
{
mobileVersion = true; 
}
export default {
  data(){
      return {
         images: [{source: '../../sponsorlogos/DigitalOcean.png',
         id: 0, 
         size: function() {
             if(!mobileVersion)
             {return {
             width: '60vw'};}
             else 
             {
                 return {
                     width: '80vh'
                 };
             }
         }, 
         ref: 'https://digitalocean.com/'}, 
         {source: 
         '../../sponsorlogos/1Password.png',
         id: 1 ,
         size: function() {
             if(!mobileVersion)
             {return {
             width: '40vw'};}
             else 
             {
                 return {
                     width: '90vh'
                 };
             }
         }, 
         ref: 'https://1password.com/'
         
         }]
      };
  }
}
</script>

<style scoped>
h1{
    text-align: center; 
}

#logos{
    margin-top: 20vh; 
    display: flex; 
    flex-direction: row wrap; 
    width: 100%; 
    justify-content: space-around; 
    align-content: space-around; 

}
.everylogo{
    width: 50%; 
 
}
</style>