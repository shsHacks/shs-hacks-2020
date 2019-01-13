<template>
  <div class="top" :class="{ 'shift-up': shiftUp }" :style="style">
    <div class="main-tab">
      <img class="logo" src="/assets/logo.png">
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
  props: {
    menuHeight: { type: Number, required: true },
  },
  data() {
    return {
      shiftUp: false,
      windowHeight: window.innerHeight,
    }
  },
  computed: {
    style() {
      return {
        height: this.shiftUp ? `${this.windowHeight - this.menuHeight}px` : `${this.windowHeight}px`,
      };
    }
  },
  mounted() {
    window.addEventListener('resize', () => this.windowHeight = window.innerHeight);

    setTimeout(() => this.shiftUp = true, 300);
    
    // when the height of an element changes, need to announce that to all other elements using the event bus
    // need to wait until the transition of height ends first
    this.$el.addEventListener('transitionend', () => eventBus.$emit('top-height-change'));
  },
  components: { RegisterButton },
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.top
  width: 100%
  position: relative
  transition: height .6s

  .main-tab
    --width: 600px
    +shadow-alt
    width: var(--width)
    height: 400px
    position: absolute
    background-color: white
    bottom: 0
    left: calc(50% - var(--width)/2)
    border-top-left-radius: 20px
    border-top-right-radius: 20px
    display: flex
    flex-direction: column 
    align-items: center
    border-bottom: 5px solid var(--primary-color)
    +mobile
      --width: 90%
      height: 320px

    .logo
      height: 240px
      +mobile
        height: 180px

    .text
      color: rgba(0, 0, 0, 0.8)
      letter-spacing: .05em
      line-height: 175%
      font-size: 1.25em
      +mobile
        font-size: .9em

      &.large
        font-size: 1.4em
        +mobile
          font-size: 1em
    
    .register
      margin-top: 15px

</style>
