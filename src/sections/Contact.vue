<template>
  <div class="contact">
    <!-- <div class="text">Have another question?</div> -->
    <!-- <div class="card"> -->
      <form class="card" action="https://formspree.io/contact@shshacks.io" method="POST">
        <div class="title">Contact Us</div>
        <textarea class="message field" type="text" name="message" placeholder="Message"/>
        <input class="email field" type="email" name="_replyto" placeholder="Your Email (so we can reply back)">
        <input class="submit" type="submit" value="Send">
      </form>
    <!-- </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.contact
  height: 225px
  width: 100%
  background-color: var(--primary-color)
  margin-top: 250px

  .card
    $card-height: 310px
    +shadow-alt
    background-color: white
    max-width: 1000px
    margin: auto
    display: flex
    flex-direction: column
    border-radius: 20px
    height: $card-height
    transform: translateY(-$card-height/2)
    width: 60%

    .title
      color: rgba(0, 0, 0, 0.8)
      font-size: 2.5em
      font-weight: bold
      margin-left: 25px
      margin-top: 10px
    
    .field
      border: #dadce0 1px solid
      padding: 10px
      outline: none
      transition: border-color .2s, border-width .2s, padding .2s
      box-sizing: border-box
      font-family: "Nunito", sans-serif
      font-size: 1.2em
      border-radius: 10px
      margin: 10px 25px
      &:focus
        border-color: var(--primary-color)
        border-width: 3px
        padding: 8px

      &.message
        resize: none
        height: 100px

    .submit
      align-self: flex-end
      margin-right: 25px
      font-family: "Nunito", sans-serif
      outline: none
      cursor: pointer
      font-size: 1.2em
      color: var(--primary-color)
      background-color: white
      font-weight: bold
      border: 2px solid var(--primary-color)
      border-radius: 50px
      width: 150px
      text-align: center
      line-height: 200%
      letter-spacing: .05em
      text-decoration: none
      transition: background-color .2s, color .2s, transform .2s
      display: block
      box-sizing: border-box
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:hover, &:focus
        background-color: var(--primary-color)
        color: white
        transform: scale(1.1)
        +shadow-alt

</style>

