export default {
  state() {
    return {
      url: process.env.MODE !== production ? "prodURL" : "localhostURL"
    };
  },

  mutations: {},

  getters: {
    url(state) {
      return state.url;
    }
  }
};
