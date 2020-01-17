import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import router from "./routes";
import App from "./App.vue";
import store from "./store";
Vue.use(VueRouter, Vuelidate);

new Vue({
  el: "#app",
  store,
  render: h => h(App),
  router
});
