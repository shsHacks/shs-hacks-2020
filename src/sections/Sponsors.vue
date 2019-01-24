<template>
  <div>
    <p class="title">A Huge Thank You to Our Generous Sponsors!</p>
    <div class="sponsors">
      <a v-for="sponsor in sponsors" class="sponsor" :href="sponsor.link" :key="sponsor.image">
        <img :src="`/assets/sponsors/${sponsor.image}`">
      </a>
    </div>
  </div>
</template>

<script>
let sponsors = [
  { image: 'culvers.svg', link: 'https://www.culvers.com/' },
  { image: 'wolfram.png', link: 'http://www.wolfram.com/' },
]

export default {
  data() {
    return {
      sponsors,
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.title
  text-align: center
  margin: 75px 10px 15px 10px
  color: rgba(0, 0, 0, 0.8)
  font-size: 2em
  font-weight: bold
  +mobile-and-tablet
    margin-top: 50px
  +mobile
    margin-left: 5px
    margin-right: 5px
    font-size: 1.7em

.sponsors
  max-width: 1000px
  margin: auto
  display: flex
  flex-flow: row wrap
  justify-content: space-around

  .sponsor
    width: 25%
    margin: 25px
    +mobile
      width: 40%
      margin: 15px

    img
      width: 100%

</style>

