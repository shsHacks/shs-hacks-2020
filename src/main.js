import Vue from 'vue';
import App from 'src/App.vue';

import { smoothscroll } from "smoothscroll-polyfill";

// smoothscroll.polyfill();

new Vue({
  el: '#app',
  render: h => h(App),
});
