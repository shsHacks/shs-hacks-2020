<template>
  <div id="app" :style="appStyle">
    <div id="background"></div>

    <top ref="top" :menu-height="menuHeight"/>
    <my-menu :sticky="menuSticky" @scroll="scrollTo($event)" ref="menu"/>

    <div id="content">
      <about id="about" :scroll="contentScroll" :color="primaryColor"/>
      <location id="location" :scroll="contentScroll" :color="colors.blue"/>
      <schedule id="schedule" :scroll="contentScroll" :color="colors.red"/>
      <switch-by-device>
        <faq id="faq" :scroll="contentScroll" :color="colors.teal" :num-columns="2"/>
        <faq slot="mobile" id="faq" :scroll="contentScroll" :color="colors.teal" :num-columns="1"/>
      </switch-by-device>
      
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
import SwitchByDevice from 'src/components/SwitchByDevice.vue';

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
      facebookXfbmlLoaded: false,
    }
  },
  created() {
    this.scroll = window.scrollY;

    window.addEventListener('scroll', () => this.scroll = window.scrollY);
  },
  mounted() {
    this.setHeights();

    // when the height of something changes, get the new values
    eventBus.$on('top-height-change', () => this.setHeights());
  },
  computed: {
    menuSticky() {
      return this.scroll >= this.topHeight;
    },
    contentScroll() {
      return this.scroll + this.menuHeight + 30;
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
  watch: {
    menuSticky() {
      if (window.FB) { // make sure facebook sdk is loaded first
        if (this.menuSticky) { // if the menu is sticky (fixed to the top), show the plugin
          if (this.facebookXfbmlLoaded) {
            FB.CustomerChat.show(false);
          } else { // if the plugin has not been loaded yet (first load)
            FB.XFBML.parse();
            this.facebookXfbmlLoaded = true;
          }
        } else {
          // don't need to hide plugin if it was never loaded in the first place
          if (this.facebookXfbmlLoaded) {
            FB.CustomerChat.hide();
          }
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
    SwitchByDevice,
  }
}
</script>

<style lang="sass">
@import 'src/style.sass'

body
  margin: 0

#app
  --menu-height: 90px
  font-family: Nunito, sans-serif
  +mobile
    --menu-height: 70px

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
  overflow: hidden
  padding-top: 25px

</style>
