import 'bootstrap'; //libreria bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; //css bootstrap
import Vue from 'vue'
import App from './App.vue'

import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

import LangFlag from 'vue-lang-code-flags';
Vue.component('lang-flag', LangFlag);

import '@fortawesome/fontawesome-free/css/all.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
