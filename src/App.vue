<template>
  <div id="app">
    <div id="background"></div>

    <top ref="top"/>
    <my-menu :sticky="menuSticky" ref="menu"/>

    <div id="content">
      <about :scroll="contentScroll"/>
      <location :scroll="contentScroll"/>

      <div style="height: 1000px"/>
    </div>
  </div>
</template>

<script>
import Top from 'src/sections/Top.vue';
import Menu from 'src/components/Menu.vue';
import About from 'src/sections/About.vue';
import Location from 'src/sections/Location.vue';

import { eventBus } from 'src/js/event-bus.js';

export default {
  data() {
    return {
      scroll: 0,
      topHeight: 0,
      menuHeight: 0,
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
  }
}
</script>

<style lang="sass">
@import 'src/style.sass'

body
  font-family: Nunito, sans-serif
  margin: 0

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
