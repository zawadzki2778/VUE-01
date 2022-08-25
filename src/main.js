import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
