<template>
  <div id="app" :style="appStyle">
    <div id="background"></div>

    <top ref="top"/>
    <my-menu :sticky="menuSticky" @scroll="scrollTo($event)" ref="menu"/>

    <div id="content">
      <about id="about" :scroll="contentScroll" :color="primaryColor"/>
      <location id="location" :scroll="contentScroll" :color="colors.blue"/>
      <schedule id="schedule" :scroll="contentScroll" :color="colors.red"/>
      <faq id="faq" :scroll="contentScroll" :color="secondaryColor"/>
      <sponsors/>
      <contact id="contact"/>
    </div>
  </div>
</template>

<script>
import Top from 'src/sections/Top.vue';
import Menu from 'src/components/Menu.vue';
import About from 'src/sections/About.vue';
import Location from 'src/sections/Location.vue';
import Schedule from 'src/sections/Schedule.vue';
import Faq from 'src/sections/Faq.vue';
import Sponsors from 'src/sections/Sponsors.vue';
import Contact from 'src/sections/Contact.vue';

import { eventBus } from 'src/js/event-bus.js';
import colors from 'src/data/colors.json';

export default {
  data() {
    return {
      scroll: 0,
      topHeight: 0,
      menuHeight: 0,
      primaryColor: '#275d38',
      secondaryColor: '#c99700',
      colors,
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

    // TODO: Debounce the following
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
    scrollTo(id) {
      // scroll to element (can't use browser's natural behavior because the fixed menu obstructs the top part of the selected section)
      if (id) {
        const element = this.$el.querySelector(id);
        if (element) {
          const top = element.offsetTop;
          window.scroll({
            top: top - this.menuHeight - 25,
            behavior: 'smooth',
          });
        }
      }
    }
  },
  components: {
    Top,
    MyMenu: Menu, // menu is a reserved word
    About,
    Location,
    Schedule,
    Faq,
    Sponsors,
    Contact,
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
