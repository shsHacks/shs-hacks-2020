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
         images: [
             
               {
                   source: '../../sponsorlogos/imc.png',
             ref: 'https://www.imc.com/us/',
             id: 0, 
              size: 'big'
              },
                {
                   source: '../../sponsorlogos/c2.png',
             ref: 'https://www.c2educate.com/',
             id: 1, 
              size: 'big'
              },
             {source: '../../sponsorlogos/DigitalOcean.png',
         id: 2, 
         size: 'medium',
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
         id: 3 ,
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
             id: 4, 
              size: 'medium'
         }, 
         {
             source: '../../sponsorlogos/github.png',
             ref: 'https://github.com/',
             id: 5, 
              size: 'supersmall'
              }, 
               
               
              {
                   source: '../../sponsorlogos/wolfram.png',
             ref: 'https://www.wolfram.com/',
             id: 7, 
              size: 'medium'
              }, 
                {
                   source: '../../sponsorlogos/Cloud.png',
             ref: 'https://cloudsploit.com/',
             id: 8, 
              size: 'medium'
              }, 
              {
                  source: '../../sponsorlogos/water.png', 
                  ref: 'https://boxedwaterisbetter.com/', 
                  id: 9, 
                  size: 'small'
              }, 
              {
                  source: '../../sponsorlogos/codeninja.png', 
                  ref: 'https://www.codeninjas.com/', 
                  id: 10, 
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
.supersmall{
      margin: 3vw;  
     display: flex;
    align-items: center;
    justify-content: center;
    width: 8vw;
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
    width: 23vw;
}
img{
    width: 100%;
}
@media screen and (max-width: 1300px)
{
    .supersmall
    {
        width: 15vw; 
    }
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
    width: 33vw;
}
#logos{
    margin-top: 15vh; 
}
}
@media screen and (max-width: 560px)
{
    .supersmall
    {
        width: 20vw; 
    }
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
    width: 43vw;
}
#logos{
    margin-top: 5vh; 
}
}
</style>