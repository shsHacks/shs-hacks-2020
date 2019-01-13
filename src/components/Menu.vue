<template>
  <div class="menu-container">
    <div class="menu" :class="{ sticky }">
      <div class="info">
        <img class="logo" src="assets/logo-no-text.png">
      </div>
      <div class="filler"></div>

      <div class="menu-item hide-mobile-sticky" @click="$emit('scroll', '#about')" v-hammer:tap="() => $emit('scroll', '#about')">
        <div class="line fake"></div> About Us <div class="line"></div>
      </div>
      <div class="menu-item hide-mobile-sticky" @click="$emit('scroll', '#location')" v-hammer:tap="() => $emit('scroll', '#location')">
        <div class="line fake"></div> Location <div class="line"></div>
      </div>
      <div class="menu-item hide-mobile-sticky" @click="$emit('scroll', '#schedule')" v-hammer:tap="() => $emit('scroll', '#schedule')">
        <div class="line fake"></div> Schedule <div class="line"></div>
      </div>
      <div class="menu-item hide-mobile" @click="$emit('scroll', '#faq')" v-hammer:tap="() => $emit('scroll', '#faq')">
        <div class="line fake"></div> FAQ <div class="line"></div>
      </div>
      <div class="menu-item hide-tablet-sticky hide-mobile" @click="$emit('scroll', '#contact')" v-hammer:tap="() => $emit('scroll', '#contact')">
        <div class="line fake"></div> Contact Us <div class="line"></div>
      </div>
      
      <div class="button-filler"></div>
      <div class="button-wrapper">
        <register-button class="register"/>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterButton from 'src/components/RegisterButton.vue';

export default {
  props: {
    sticky: { type: Boolean, default: false },
  },
  components: { RegisterButton },
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

// Menu container is used to fill the space left when the menu becomes sticky (position: fixed)
.menu-container
  height: var(--menu-height)

.menu
  --menu-margin: 75px
  --button-width: 140px
  height: var(--menu-height)
  background-color: white
  display: flex
  position: relative
  align-items: center
  padding: 0 var(--menu-margin)
  justify-content: space-around
  width: 100%;
  box-sizing: border-box;
  // border-bottom: $primary-color 2px solid
  overflow: hidden
  transition: box-shadow .3s
  z-index: 100
  +tablet
    --menu-margin: 25px
  +mobile
    --menu-margin: 15px

  .menu-item
    color: #666666
    font-weight: bold
    font-size: 1.4em
    text-decoration: none
    transition: color .2s
    margin: 0 15px
    transform: font-size .3s
    cursor: pointer
    +mobile
      font-size: 1.1em
      margin: 0 10px
    &.hide-tablet
      +tablet
        display: none
    &.hide-mobile
      +mobile
        display: none

    .line
      height: 4px
      width: 0px
      background-color: var(--secondary-color)
      margin: auto
      transition: width .2s
      border-radius: 5px
      &.fake // the fake line is for vertically aligning the text to the center properly
        visibility: hidden

    &:hover
      color: var(--secondary-color)

      .line
        width: 100%

  .info
    display: flex
    align-items: center
    position: absolute
    left: var(--menu-margin)
    transform: translateX(calc(-1 * var(--menu-margin) - 300px))
    transition: transform .3s

    .logo
      display: inline-block
      height: calc(var(--menu-height) / 5 * 3)
      margin-right: 10px

    .title
      font-weight: bold
      font-size: 2em
      letter-spacing: 1px
      color: rgba(0, 0, 0, .8)

  .register
    font-size: 1em
    width: var(--button-width)

  // need to use a wrapper for button animations because .register-button is already using the transform property to scale on hover
  .button-wrapper
    position: absolute
    right: var(--menu-margin)
    transform: translateX(calc(var(--button-width) + var(--menu-margin) + 10px))
    transition: transform .3s

  .filler
    transition: flex .3s
  
  .button-filler
    width: 0px
    transition: width .3s, margin-left .3s

  &.sticky
    position: fixed
    top: 0
    +shadow-alt

    .filler
      flex: 1
    
    .button-filler
      width: var(--button-width)
      margin-left: 15px

    .menu-item
      font-size: 1.2em
      &.hide-tablet-sticky
        +tablet
          display: none
      &.hide-mobile-sticky
        +mobile
          display: none

    .info
      transform: translateX(0)

    .button-wrapper
      transform: translateX(0)

</style>
