<template>
  <div id="shsHacksAbout">
    <div>
      <div id="right">
        <img v-bind:src="image" id="slideshow" />
        <a
          href="https://drive.google.com/drive/folders/1-EZcs_Zz4tR8yeesqDO_MdkRvBeOaltM"
          style="text-decoration: underline; color: blue;"
          id="caption"
        >Click here to see more of what happened last time at shsHacks!</a>
      </div>
      <p>
        shsHacks is a collaborative, 24-hour coding marathon that will take place
        <span style="color: #29a9ff; font-weight: bold;">February 15-16, 2020</span> at Adlai E. Stevenson High School, IL.
      </p>
      <p>Never coded before? Want experience with hands-on project development? Wondering about food? We’ve got you covered at shsHacks!</p>
      <p>shsHacks is for all students who want to invent, design, and bring their ideas into reality. From workshops to working on projects, there’s something for you at shsHacks whether you’re intrigued beginner or a seasoned developer.</p>
      <p>
        shsHacks is student-run, student-organized, and completely
        <span style="color:#0ef01a; font-weight: bold;">free</span> for all participants.
      </p>
    </div>
  </div>
</template>

<script>
function importAll(r) {
  return r.keys().map(r);
}

const sources = importAll(
  require.context("@/assets/pics", false, /\.(png|jpe?g|svg)$/)
);


export default {
  data() {
    return {
      image: sources[2]
    };
  },
  mounted() {
    var source = 2;
    const changeSlide = () => {
      this.image = sources[source];
      source += 1;
      if (source === 6) {
        source = 0;
      }
    }

    window.setInterval(function() {
      changeSlide();
    }, 3000);
  }
};
</script>

<style scoped>
#slideshow {
  object-fit: contain;

  width: 30vw;
  top: 0;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  stroke: black;
  float: right;
  border: 0.5vw solid rgb(0, 133, 51);
}
#right {
  width: 30vw;
  text-align: center;
  top: 0;
  margin: 0;
  padding: 0;
  margin-right: 7vw;
  margin-left: 10vw;
  float: right;
}


p {
  flex: 50%;
  font-size: 3vh;
  text-align: left;
  margin-left: 10vw;
}
@media screen and (max-width: 696px)
{
  #slideshow{
    width: 40vw; 
  }
 p{
   margin-left: 5vw; 
 }
}
</style>