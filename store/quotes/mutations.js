export default {
  storeQuotes(state, quotes) {
    console.log("Someone called me.. ", quotes);
    state.quotes = quotes;
  }
};
