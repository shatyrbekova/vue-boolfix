import 'bootstrap'; //libreria bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; //css bootstrap
import Vue from 'vue'
import App from './App.vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// // import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret, faCoffee)
// library.add(faJs, faVuejs);
Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
