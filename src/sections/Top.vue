<template>
  <div class="top" :class="{ 'shift-up': shiftUp }">
    <div class="main-tab">
      <div class="logo"></div>
      <div class="title">shsHacks</div>
      <div class="text">March 2nd – 3rd, 2019</div>
      <div class="text large">Adlai E. Stevenson High School</div>
      <a class="register-button" href="">Register Now</a>
    </div>
  </div>
</template>

<script>
import { eventBus } from 'src/js/event-bus.js';

export default {
  data() {
    return {
      shiftUp: false,
    }
  },
  created() {
    setTimeout(() => this.shiftUp = true, 300);
    
    // when the height of an element changes, need to announce that to all other elements using the event bus
    // 300 (above timeout) + 600 (animation duration) + 100 (leeway) = 1000
    setTimeout(() => eventBus.$emit('height-change'), 1000);
  }
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.top
  width: 100%
  height: 100vh
  position: relative
  transition: height .6s

  &.shift-up
    height: calc(100vh - #{$menu-height})

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
    border-bottom: 5px solid $primary-color 

    .logo
      $scale: 96px / 75px
      $width: 85px
      width: $width
      height: $width * $scale
      margin-top: 15px
      
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
    
    .register-button
      margin-top: 25px

</style>
