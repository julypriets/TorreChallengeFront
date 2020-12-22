export default {
  state() {
    return {
      url: process.env.NODE_ENV !== "production" ? "prodURL" : "localhostURL"
    };
  },

  mutations: {},

  getters: {
    url(state) {
      return state.url;
    }
  }
};
