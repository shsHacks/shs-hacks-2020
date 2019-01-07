<template>
  <sliding-title :scroll="scroll" title="Schedule" :color="color">
    <div class="schedule" :style="{ '--color': color}">
      <div class="tabs">
        <div
          class="tab"
          v-for="(day, index) in schedule"
          :class="{ selected: index === selectedDay }"
          :style="getTabStyle(index)"
          @click="selectedDay = index">
          {{ day.date }}
        </div>
      </div>

      <div class="card" :style="{ height: `${cardHeight}px` }">
        <div class="time-background"/>

        <div
          class="event-container"
          v-for="(day, index) in schedule"
          :style="getEventContainerStyle(index)"
          ref="events-container">
          <div class="event" v-for="event in day.events">
            <div class="time">{{ event.time }}</div>
            <div class="text">{{ event.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </sliding-title>
</template>

<script>
import SlidingTitle from 'src/components/SlidingTitle.vue';
import schedule from 'src/data/schedule.json';

export default {
  props: {
    scroll: { type: Number, required: true },
    color: { type: String, required: true },
  },
  data() {
    return {
      schedule,
      selectedDay: 0,
      cardHeight: 0,
    }
  },
  mounted() {
    this.setCardHeight();
    window.addEventListener("load", () => this.setCardHeight());
  },
  methods: {
    getTabStyle(index) {
      // the selected tab gets the highest z-score of 11
      // the remaining get lower z-scores as they are further from the selected one
      const zIndex = (index === this.selectedDay) ? 11 : 10 - Math.abs(this.selectedDay - index);

      return {
        left: `${-10 * index}px`,
        zIndex, 
      };
    },
    setCardHeight() {
      this.cardHeight = this.$refs['events-container'][this.selectedDay].offsetHeight;
    },
    getEventContainerStyle(index) {
      const translatePercent = (index - this.selectedDay) * 100;
      return {
        transform: `translateY(${translatePercent}%)`,
      };
    }
  },
  watch: {
    selectedDay() {
      this.setCardHeight();
    }
  },
  components: { SlidingTitle },
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.schedule
  .tabs
    overflow: auto
    padding-top: 10px
    padding-left: 10px

    .tab
      display: inline-block
      +shadow-alt
      padding: 15px
      border-top-right-radius: 15px
      border-top-left-radius: 15px
      width: 200px
      text-align: center
      position: relative
      background-color: white
      font-size: 1.2em
      font-weight: bold
      cursor: pointer
      color: rgba(0, 0, 0, 0.8)
      transition: color .3s

      &.selected
        color: var(--color)
        cursor: default
      
      &:hover
        color: var(--color)

  .card
    margin-left: 10px // must equal the padding-left of .tabs
    width: 100%
    +shadow-alt
    z-index: 10
    position: relative
    background-color: white
    overflow: hidden
    border-radius: 0 20px 20px 20px
    transition: height .2s

    .time-background
      position: absolute
      top: 0
      left: 0
      width: 30%
      height: 100%
      background-color: var(--color)

    .event-container
      position: absolute
      top: 0
      left: 0
      width: 100%
      transition: transform .4s

      .event
        padding: 25px 0

        .time
          display: inline-block
          width: 30%
          text-align: right
          font-size: 1.1em
          font-weight: bold
          // background-color: rgba(0, 0, 0, .02)
          // background-color: $secondary-color
          color: white
          box-sizing: border-box
          padding-right: 15px

        .text
          display: inline-block
          font-size: 1.2em
          margin-left: 20px
          // color: $secondary-color
          // font-weight: bold
          color: rgba(0, 0, 0, 0.8)

      
</style>

