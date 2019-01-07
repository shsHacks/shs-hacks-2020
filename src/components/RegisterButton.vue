<template>
  <a class="register-button" href="">Register Now</a>  
</template>

<script>
export default {

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
  text-decoration: none
  transition: background-color .2s, color .2s, transform .2s
  display: block
  box-sizing: border-box

  &:hover
    background-color: var(--primary-color)
    color: white
    transform: scale(1.1)
    +shadow-alt

</style>

