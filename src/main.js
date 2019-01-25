import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';
import VueAnalytics from "vue-analytics";
import App from 'src/App.vue';

import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

Vue.use(VueAnalytics, {
  id: 'UA-132318363-1',
});

Vue.use(VueHammer);
new Vue({
  el: '#app',
  render: h => h(App),
});
