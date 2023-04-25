module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
  },
};
