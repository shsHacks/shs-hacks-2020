<template>
  <div id="app" :style="appStyle">
    <div id="background"></div>

    <top ref="top"/>
    <my-menu :sticky="menuSticky" ref="menu"/>

    <div id="content">
      <about :scroll="contentScroll" :color="primaryColor"/>
      <location :scroll="contentScroll" :color="primaryColor"/>
      <schedule :scroll="contentScroll" :color="secondaryColor"/>

      <div style="height: 3000px"/>
    </div>
  </div>
</template>

<script>
import Top from 'src/sections/Top.vue';
import Menu from 'src/components/Menu.vue';
import About from 'src/sections/About.vue';
import Location from 'src/sections/Location.vue';
import Schedule from 'src/sections/Schedule.vue';

import { eventBus } from 'src/js/event-bus.js';

const colors = {
  red: '#BA0C2F',
  orange: '#FE5000',
  midGreen: '#48A23F',
  highlightGreen: '#D0DF00',
  darkBlue: '#002F6C',
  blue: '#005587',
  teal: '#006F62',
  brightBlue: '#00A3E0',
}

export default {
  data() {
    return {
      scroll: 0,
      topHeight: 0,
      menuHeight: 0,
      primaryColor: '#275d38',
      secondaryColor: '#c99700',
      colors
    }
  },
  created() {
    this.scroll = window.scrollY;

    window.addEventListener('scroll', () => this.scroll = window.scrollY);
  },
  mounted() {
    this.setHeights();

    // when the height of something changes, get the new values
    eventBus.$on('height-change', () => this.setHeights());

    // some heights may change when the window is resized (other components depend on the accuracy of height-change)
    window.addEventListener('resize', () => eventBus.$emit('height-change'));
  },
  computed: {
    menuSticky() {
      return this.scroll >= this.topHeight;
    },
    contentScroll() {
      return this.scroll + this.menuHeight + 50;
    },
    appStyle() {
      return {
        '--primary-color': this.primaryColor,
        '--secondary-color': this.secondaryColor,
      }
    }
  },
  methods: {
    setHeights() {
      this.menuHeight = this.$refs['menu'].$el.offsetHeight;
      this.topHeight = this.$refs['top'].$el.offsetHeight;
    },
  },
  components: {
    Top,
    MyMenu: Menu, // menu is a reserved word
    About,
    Location,
    Schedule
  }
}
</script>

<style lang="sass">
@import 'src/style.sass'

body
  margin: 0

#app
  font-family: Nunito, sans-serif

#background
  width: 100%
  height: 100%
  background-image: url('/assets/background.png')
  background-size: 100% 100%
  position: fixed
  top: 0
  left: 0
  z-index: -1

#content
  width: 100%
  background-color: white
  overflow: auto
  padding-top: 25px;

</style>
