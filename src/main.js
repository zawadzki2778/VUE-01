import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router: router,
  store: store,
  el: '#app',
  render: h => h(App)
})
