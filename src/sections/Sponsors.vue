<template>
  <div id = "sponsors">

<h1><u><b>Our Sponsors</b></u></h1>
<div id = "logos">
    
<div v-for="image in images" :key="image.id">
<a :href="image.ref" target="_blank"  :class="image.size">
<img :src="image.source"/>

</a>

</div>
</div>
  </div>
</template>

<script>
/*const sizes = { // [normal, mobile]
    'big': [{ minWidth: '30vw'}, { minWidth: '40vw'}],
    'small':[{minWidth: '20vw'}, {minWidth: '30vw'}]
};*/

export default {
  data(){
      return {
         images: [{source: '../../sponsorlogos/DigitalOcean.png',
         id: 0, 
         size: 'big',
        //  size: ()=> {
        //      if(!this.mobileVersion)
        //      { 
        //          return {
               
        //      minWidth: '40vw'};}
        //      else 
        //      {
                 
        //          return {
        //              minWidth: '30vw'
        //          };
        //      }
        //  }, 
         ref: 'https://digitalocean.com/'}, 
         {source: 
         '../../sponsorlogos/1Password.png',
         id: 1 ,
         size: 'medium',
        //  size: function() {
        //      if(!this.mobileVersion)
        //      {return {
        //      width: '40vw'};}
        //      else 
        //      {
        //          return {
        //              minWidth: '30vw'
        //          };
        //      }
        //  }, 
         ref: 'https://1password.com/'
         
         }, 
         {
             source: '../../sponsorlogos/BCDV.png', 
             ref: 'https://www.bcdvideo.com/', 
             id: 2, 
              size: 'big'
         }, 
         {
             source: '../../sponsorlogos/github.png',
             ref: 'https://github.com/',
             id: 3, 
              size: 'small'
              }, 
               {
             source: '../../sponsorlogos/stickermule.png',
             ref: 'https://github.com/',
             id: 3, 
              size: 'medium'
              }, 
                {
             source: '../../sponsorlogos/wolfram.png',
             ref: 'https://github.com/',
             id: 3, 
              size: 'medium'
              }
         
         ]
      };
  },

}
</script>

<style scoped>
h1{
    text-align: center; 
}

#logos{
  
    margin-top: 20vh; 
    display: flex; 
   
    flex-flow: row wrap; 
    max-width: 100vw; 
    justify-content: space-around;
   
}
.small{
  margin: 3vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
}

.medium{
     margin: 3vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
}
.big{
     margin: 3vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
}
img{
    width: 100%;
}
@media screen and (max-width: 1300px)
{
    .small{
  margin: 2vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
}

.medium{
     margin: 2vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 25vw;
}
.big{
     margin: 2vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
}
#logos{
    margin-top: 15vh; 
}
}
@media screen and (max-width: 560px)
{
    .small{
  margin: 2vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
}

.medium{
     margin: 2vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 35vw;
}
.big{
     margin: 2vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 40vw;
}
#logos{
    margin-top: 5vh; 
}
}
</style>