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

export default {
  data(){
      return {
         images: [{source: '../../sponsorlogos/DigitalOcean.png',
         id: 0, 
         size: ()=> {
             if(!this.mobileVersion)
             { 
                 return {
               
             width: '60vw'};}
             else 
             {
                 
                 return {
                     width: '30vh'
                 };
             }
         }, 
         ref: 'https://digitalocean.com/'}, 
         {source: 
         '../../sponsorlogos/1Password.png',
         id: 1 ,
         size: function() {
             if(!this.mobileVersion)
             {return {
             width: '40vw'};}
             else 
             {
                 return {
                     width: '20vh'
                 };
             }
         }, 
         ref: 'https://1password.com/'
         
         }], 
         mobileVersion: false
      };
  }, 
  mounted(){
     


if(window.innerHeight>window.innerWidth)
{
   
this.mobileVersion = true; 
}
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
   
 
}
</style>