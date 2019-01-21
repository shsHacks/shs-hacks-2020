<template>
  <div class="register-popup" :class="{ show }">
    <div class="background" @click="hidePopup"/>

    <div class="popup">
      <div class="title">Do You Go To Stevenson High School?</div>
      <div class="buttons">
        <a class="button" :href="otherRegisterUrl" target="_blank" tabindex="0" @click="hidePopup">No</a>
        <a class="button" :href="shsRegisterUrl" target="_blank" tabindex="0" @click="hidePopup">Yes</a>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from 'src/js/event-bus.js';

export default {
  props: {
    show: { type: Boolean, required: true },
  },
  data() {
    return {
      shsRegisterUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd32w4xnL_L7Tcw0kpFQeJnaqX1Al04gNpohbuxeUi27jhEVA/viewform?usp=sf_link",
      otherRegisterUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe6haBB4pYVGwMxDRTn_nFkx1AZ7ch-gabcePoeVqP69N2lzg/viewform?usp=sf_link",
    }
  },
  methods: {
    hidePopup() {
      eventBus.$emit('hide-register-popup');
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.register-popup
  .background
    position: fixed
    height: 100vh
    width: 100vw
    left: 100vw
    top: 0
    background-color: black
    opacity: 0
    z-index: 101
    transition: opacity .3s

  .popup
    --height: 140px
    --width: 475px
    height: var(--height)
    width: var(--width)
    position: fixed
    left: calc(50vw - var(--width) / 2)
    top: calc(50vh - var(--height) / 2)
    background-color: white
    z-index: 102
    +shadow-alt
    border-radius: 15px
    transition: transform .3s
    transform: scale(0)
    +mobile
      --width: 300px
      --height: 165px

    .title
      text-align: center
      font-size: 1.5em
      margin: 20px 0
      font-weight: bold
      color: rgba(0, 0, 0, 0.8)

    .buttons
      display: flex
      justify-content: space-evenly

      .button
        font-size: 1.1em
        color: var(--primary-color)
        font-weight: bold
        border: 2px solid var(--primary-color)
        border-radius: 50px
        width: 175px
        text-align: center
        line-height: 225%
        letter-spacing: .05em
        transition: background-color .2s, color .2s, transform .2s
        box-sizing: border-box
        cursor: pointer
        background-color: white
        outline: none
        display: block
        text-decoration: none
        +mobile
          width: 125px
          font-size: 1em

        &:hover, &:focus
          background-color: var(--primary-color)
          color: white
          transform: scale(1.1)
          +shadow-alt


  &.show
    .background
      left: 0
      opacity: .5

    .popup
      transform: scale(1)


</style>
