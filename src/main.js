import Vue from "vue";
import App from "./App.vue";

import ProgressBar from './components/ProgressBar'

Vue.config.productionTip = false

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  el: '#app',
  render: h => h(App)
})