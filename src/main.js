import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';
import App from 'src/App.vue';

import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

Vue.use(VueHammer);
new Vue({
  el: '#app',
  render: h => h(App),
});
