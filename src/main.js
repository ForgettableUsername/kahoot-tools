import Vue from "vue"
import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css";
import config from "../config.json";

import App from "./App.vue"
import router from "./router"
import "./registerServiceWorker"

export const Store = new Vue({
  data: {
    client: null,
    theme: localStorage.getItem("theme") || "light"
  }
})

export const Config = config;

Vue.prototype.$globals = Store
Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")