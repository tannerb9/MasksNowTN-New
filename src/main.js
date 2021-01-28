import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App";
import router from "./router/index.js";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: function(createElement) {
    return createElement(App);
  },
}).$mount("#app");
