<template>
  <div class="top" :class="{ 'shift-up': shiftUp }" :style="style">
    <div class="main-tab">
      <!-- <div class="logo"></div> -->
      <img class="logo" src="/assets/logo.png">
      <!-- <div class="title">shsHacks</div> -->
      <div class="text">March 2nd – 3rd, 2019</div>
      <div class="text large">Adlai E. Stevenson High School</div>
      <register-button class="register"/>
    </div>
  </div>
</template>

<script>
import { eventBus } from 'src/js/event-bus.js';
import RegisterButton from 'src/components/RegisterButton.vue';

export default {
  data() {
    return {
      shiftUp: false,
      windowHeight: window.innerHeight,
    }
  },
  computed: {
    style() {
      return {
        height: this.shiftUp ? `${this.windowHeight - 90}px` : `${this.windowHeight}px`,
      };
    }
  },
  mounted() {
    window.addEventListener('resize', () => this.windowHeight = window.innerHeight);

    setTimeout(() => this.shiftUp = true, 300);
    
    // when the height of an element changes, need to announce that to all other elements using the event bus
    // need to wait until the transition of height ends first
    this.$el.addEventListener('transitionend', () => eventBus.$emit('height-change'));
  },
  components: { RegisterButton },
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.top
  width: 100%
  // height: 100vh
  position: relative
  transition: height .6s

  // &.shift-up
  //   height: calc(100vh - #{$menu-height})

  .main-tab
    $width: 600px
    +shadow-alt
    width: $width
    height: 400px
    position: absolute
    background-color: white
    bottom: 0
    left: calc(50% - #{$width}/2)
    border-top-left-radius: 20px
    border-top-right-radius: 20px
    display: flex
    flex-direction: column 
    align-items: center
    border-bottom: 5px solid var(--primary-color) 

    .logo
      // $scale: 96px / 75px
      // $width: 85px
      // width: $width
      // height: $width * $scale
      // margin-top: 15px
      height: 240px
      
    .title
      font-size: 5em
      letter-spacing: .15em
      color: rgba(0, 0, 0, 0.8)
      font-weight: bold
      line-height: 125%

    .text
      color: rgba(0, 0, 0, 0.8)
      letter-spacing: .05em
      line-height: 175%
      font-size: 1.25em

      &.large
        font-size: 1.4em
    
    .register
      margin-top: 15px

</style>
