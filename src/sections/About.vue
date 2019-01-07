<template>
  <sliding-title title="About Us" :scroll="scroll" :color="color">
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor ipsum non ante gravida cursus. Suspendisse a ullamcorper massa. Cras lobortis libero id nibh commodo, a mollis urna consectetur. Duis ultrices eros vestibulum aliquam laoreet. Nam tristique leo at neque porttitor auctor. Aenean ullamcorper erat ac sodales auctor. Curabitur quis nulla eu turpis lobortis volutpat eget efficitur massa. Proin dapibus, eros at viverra pellentesque, erat lectus auctor sem, at tempus nisl nisi id purus. Vestibulum molestie, orci at egestas fringilla, magna enim venenatis metus, a tempus orci eros vel velit. Cras ligula nibh, feugiat eu mauris molestie, dignissim pharetra odio. Proin ut pretium leo, at accumsan augue. Praesent semper hendrerit quam eu varius. Duis id congue augue.</div>
  </sliding-title>
</template>

<script>
import { eventBus } from 'src/js/event-bus.js';
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
.text
  font-size: 1.25em
</style>
