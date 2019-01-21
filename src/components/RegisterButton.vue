<template>
  <div class="register-button" @click="showRegisterPopup">Register Now</div>  
</template>

<script>
import { eventBus } from 'src/js/event-bus.js';

export default {
  methods: {
    showRegisterPopup() {
      eventBus.$emit('show-register-popup');
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.register-button
  font-size: 1.25em
  color: var(--primary-color)
  font-weight: bold
  border: 2px solid var(--primary-color)
  border-radius: 50px
  width: 250px
  text-align: center
  line-height: 225%
  letter-spacing: .05em
  transition: background-color .2s, color .2s, transform .2s
  display: block
  box-sizing: border-box
  cursor: pointer
  +mobile
    width: 225px
    font-size: 1.15em

  &:hover
    background-color: var(--primary-color)
    color: white
    transform: scale(1.1)
    +shadow-alt

</style>

