export default {
  state: {
    stateFull: true
  },
  mutations: {
    changeStateFull(state) {
      state.stateFull = !state.stateFull;
    }
  },
  actions: {
    asyncChangeCounter({ commit }, payload) {
      setTimeout(() => {
        commit("changeStateFull");
      }, payload);
    }
  }
};
