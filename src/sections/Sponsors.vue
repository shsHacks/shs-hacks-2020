<template>
  <div>
    <p class="title">A Huge Thank You to Our Generous Sponsors!</p>
    <div class="sponsors">
      <a
        v-for="sponsor in sponsors"
        class="sponsor"
        :class="{ large: sponsor.large, small: sponsor.small }"
        :style="{ padding: `0 ${sponsor.padding}px` }"
        :href="sponsor.link"
        :key="sponsor.image"
        target="_blank">
        <img :src="`/assets/sponsors/${sponsor.image}`">
      </a>
    </div>
  </div>
</template>

<script>
let sponsors = [
  { image: 'imc.png', link: 'https://www.imc.com/us/', large: true },
  { image: 'culvers.svg', link: 'https://www.culvers.com/', large: true },
  { image: 'paylocity.svg', link: 'https://www.paylocity.com/', large: true },
  { image: 'alight.png', link: 'https://alight.com/', large: true },
  { image: 'lg.png', link: 'https://lg.com/' },
  { image: 'bswift.jpg', link: 'https://www.bswift.com/' },
  { image: 'wolfram.png', link: 'http://www.wolfram.com/', small: true },
  { image: 'invision.png', link: 'https://www.invisionapp.com/', small: true },
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
    width: 31%
    margin: 10px 25px
    display: flex
    align-items: center
    justify-content: center
    box-sizing: border-box
    &.small
      width: 17%
    &.large
      width: 40%
    +mobile
      width: 40%
      margin: 15px
      &.small
        width: 28%
      &.large
        width: 60%

    img
      width: 100%

</style>

