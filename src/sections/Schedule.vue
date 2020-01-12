<template>
    <div class="schedule" :style="{ '--color': color}">
      <div class="tabs">
        <div
          class="tab"
          v-for="(day, index) in schedule"
          :class="{ selected: index === selectedDay }"
          :style="getTabStyle(index)"
          @click="selectedDay = index"
          :key='day.date'>
          <switch-by-device>
            <span>{{ getDayString(day.date) }}</span>
            <span slot="mobile">{{ getDayStringMobile(day.date) }}</span>
          </switch-by-device>
        </div>
      </div>

      <div class="card" :style="{ height: `${cardHeight}px` }">
        <div class="time-background"/>

        <div
          class="event-container"
          v-for="(day, index) in schedule"
          :style="getEventContainerStyle(index)"
          ref="events-container"
          :key = "day.date">
          <div class="event" v-for="event in day.events" :key = 'event.iam'>
            <div class="time">
              <div class="start" v-html="setSmallCaps(event.start)"/>
              <div class="end" v-html="setSmallCaps(event.end)"/>
            </div>
            <div class="text">{{ event.text }}</div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

import SwitchByDevice from "@/components/SwitchByDevice.vue";
import schedule from '@/data/schedule.json';

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
        left: `${-20 * index}px`,
        zIndex, 
      };
    },
    setCardHeight() {
      this.cardHeight = this.$refs['events-container'][this.selectedDay].offsetHeight;
    },
    getEventContainerStyle(index) {
      // const translatePercent = (index - this.selectedDay) * 100;
      let translateAmount = 0;
      
      if (this.$refs['events-container']) {
        if (index < this.selectedDay) {
          translateAmount = -this.$refs['events-container'][index].offsetHeight;
        }
        else {
          for (let i = this.selectedDay; i < index; i++) {
            translateAmount += this.$refs['events-container'][i].offsetHeight;
          }
        }
      }
      return {
        transform: `translateY(${translateAmount}px)`,
      };
    },
    setSmallCaps(timeString) {
      const smallCapsStyle = 'style="font-size: .8em"';

      if (timeString) {
        return timeString
          .replace(/AM/gi, `<span ${smallCapsStyle}>AM</span>`)
          .replace(/PM/gi, `<span ${smallCapsStyle}>PM</span>`);
      }

      return '';
    },
    getDayString(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    },
    getDayStringMobile(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', { weekday: 'long' });
    }
  },
  watch: {
    selectedDay() {
      this.setCardHeight();
    }
  },
  components: {  SwitchByDevice },
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.schedule
  .tabs
    overflow: auto
    padding-top: 10px
    padding-left: 10px
    +mobile
      width: calc(100% + 20px) // +20px is to compensate for the shifted tab

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

      +mobile
        width: 110px
        padding: 15px 10px

  .card
    --time-width: 150px
    margin-left: 10px // must equal the padding-left of .tabs
    width: 100%
    +shadow-alt
    z-index: 10
    position: relative
    background-color: white
    overflow: hidden
    border-radius: 0 20px 20px 20px
    transition: height .2s
    +mobile
      --time-width: 100px

    .time-background
      position: absolute
      top: 0
      left: 0
      width: var(--time-width)
      height: 100%
      background-color: var(--color)

    .event-container
      position: absolute
      top: 0
      left: 0
      width: 100%
      transition: transform .4s

      .event
        height: 75px
        display: flex
        align-items: center
        border-bottom: white solid;
        box-sizing: border-box;

        .time
          display: inline-block
          width: var(--time-width)
          text-align: right
          font-size: 1.1em
          font-weight: bold
          color: white
          box-sizing: border-box
          padding-right: 15px
          +mobile
            padding-right: 10px

          div
            margin: 5px 0

        .text
          display: inline-block
          font-size: 1.2em
          width: calc(100% - var(--time-width))
          padding-left: 20px
          box-sizing: border-box
          color: rgba(0, 0, 0, 0.8)
          +mobile
            padding-left: 10px

      
</style>

