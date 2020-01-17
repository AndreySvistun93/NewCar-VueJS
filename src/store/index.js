import Vue from "vue";
import Vuex from "vuex";
import cars from "./cars";
import carFull from "./carFull";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cars,
    carFull
  }
});
