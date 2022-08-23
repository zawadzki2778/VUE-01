import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  // router: VueRouter,
}).$mount('#app')
