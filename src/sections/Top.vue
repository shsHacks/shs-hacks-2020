<template>
  <div class="top" :style="style">
    <div class="main-tab">
      <img class="logo" src="/assets/logo.png">
      <div class="text">February 15th – 16th, 2020</div>
      <div class="text large">Adlai E. Stevenson High School</div>
      <!-- <register-button class="register"/> -->
      <div class="fake-button">Coming Soon...</div>
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
  height: 100vh
  position: relative
  display: flex
  justify-content: center
  align-items: center

  .main-tab
    +shadow-alt
    width: 600px
    height: 400px
    background-color: white
    border-radius: 15px
    display: flex
    flex-direction: column
    align-items: center
    padding-top: 10px
    +mobile
      width: 90%
      height: 320px

    .logo
      height: 240px
      +mobile
        height: 180px

    .text
      color: rgba(0, 0, 0, 0.8)
      letter-spacing: .05em
      line-height: 175%
      font-size: 1.2em
      +mobile
        font-size: .9em

      &.large
        font-size: 1.4em
        +mobile
          font-size: 1em
    
    .fake-button
      margin-top: 15px
      font-size: 1.25em
      font-weight: bold
      color: var(--primary-color)
      border: 2px solid var(--primary-color)
      border-radius: 50px
      width: 250px
      text-align: center
      line-height: 225%
      letter-spacing: .05em
      user-select: none

</style>
