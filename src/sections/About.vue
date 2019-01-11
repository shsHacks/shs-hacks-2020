<template>
  <sliding-title title="About Us" :scroll="scroll" :color="color">
    <div class="text">
      <p><span class="highlight">shsHacks</span> is a first time high school hackathon being held at Adlai E. Stevenson High School in Lincolnshire, Illinois on <span class="highlight">March 2-3</span>, 2019.</p>
      <p>Over <span class="highlight">200</span> high school students will come together and participate in the "marathon" to bring their ideas into reality within the span of <span class="highlight">24 hours</span></p>
    </div>
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
  font-size: 1.2em
  p
    margin-top: 0

  .highlight
    color: var(--secondary-color)
    font-weight: bold

</style>
