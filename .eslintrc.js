module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
