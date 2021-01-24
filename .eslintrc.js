module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    semi: ["error", "always"],
  },
  ignorePatterns: [
    ".github/**",
    "node_modules/**",
    "package-lock.json",
    "package.json",
  ],
};
