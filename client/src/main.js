import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//MAKE this.$http.method -> to Access Axios
Axios.defaults.baseURL = "http://localhost:3000/api/"
Vue.prototype.$http = Axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
