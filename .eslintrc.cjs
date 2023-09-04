module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', '@vue/typescript/recommended', 'plugin:vue/essential', 'prettier'],
  plugins: [],
  rules: {
    'vue/no-v-model-argument': 0,
  },
};
