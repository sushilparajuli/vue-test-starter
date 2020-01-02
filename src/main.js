import Vue from "vue";
import App from "./App.vue";
import Vuex from 'vuex'
import storeConfig from './store/store-config'
import ProgressBar from './components/ProgressBar'

Vue.use(Vuex)


const store = new Vuex.Store(storeConfig)

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})