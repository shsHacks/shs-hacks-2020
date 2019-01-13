<template>
  <sliding-title title="About Us" :scroll="scroll" :color="color">
    <div class="text">
      <p>shsHacks is Stevenson High School’s first ever Hackathon, a collaborative, <span class="highlight">24-hour</span> coding marathon that will take place March 2-3. Get ready to make the best game, app, or website of your life so far in just one weekend.</p>
      <p>Never coded before? Just started? New to hands-on project development? No problem! shsHacks is for any and all students who are interested in inventing, designing, and bringing their creations to life, from beginners to seasoned developers.</p>
      <p>shsHacks is student-run, student-organized, and completely <span class="highlight">free</span> for all participants. For more info, check out the FAQs or contact us below.</p>
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
