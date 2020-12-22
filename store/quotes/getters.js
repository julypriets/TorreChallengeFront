export default {
  getQuote(state) {
    return state.quotes[Math.floor(Math.random() * state.quotes.length)];
  }
};
