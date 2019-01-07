<template>
  <sliding-title title="Location" :scroll="scroll" :color="color">
      <iframe class="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.705930446809!2d-87.94832258484425!3d42.19935477919796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbdc258de4753%3A0x8d1b4f6510025528!2sAdlai+E.+Stevenson+High+School!5e0!3m2!1sen!2sus!4v1546810749329" frameborder="0" allowfullscreen></iframe>
  </sliding-title>
</template>

<script>
import SlidingTitle from 'src/components/SlidingTitle.vue';

export default {
  props: {
    scroll: { type: Number, required: true },
    color: { type: String, required: true },
  },
  components: { SlidingTitle },
}
</script>

<style lang="sass" scoped>
.location
  width: 100%
  height: 600px
  border: 0

</style>
