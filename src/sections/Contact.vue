<template>
  <div class="contact">
    <!-- <div class="text">Have another question?</div> -->
    <!-- <div class="card"> -->
      <form class="card" action="https://formspree.io/contact@shshacks.io" method="POST">
        <div class="title">Contact Us</div>
        <textarea class="message" type="text" name="message" placeholder="Message"/>
        <input class="email" type="email" name="_replyto">
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

  // .text
  //   color: white
  //   font-size: 3em
  //   font-weight: bold
  //   text-align: center

  .card
    +shadow-alt
    background-color: white
    width: 1000px
    margin: auto
    display: flex
    flex-direction: column
    border-radius: 20px
    height: 300px
    transform: translateY(-150px)

    .title
      color: rgba(0, 0, 0, 0.8)
      font-size: 2.5em
      font-weight: bold
      margin-left: 25px
      margin-top: 10px

    .message
      resize: none
      height: 100px
      margin: 25px 25px
      border-radius: 10px
      font-family: "Nunito", sans-serif
      font-size: 1.2em

    .email
      margin: 0 25px

    .submit
      width: 100px

</style>

