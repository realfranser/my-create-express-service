module.exports = {
  env: {
    browser: true
  },
  extends: [
    google,
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier']
};
