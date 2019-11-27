module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "no-param-reassign": 0,
    // disable no-underscore-dangle
    "no-underscore-dangle": 0,
    // turn off eslint no-console error
    'no-console': 'off',
    // disallows named function expressions, except in recursive functions, where a name is needed
    'func-names': ["error", "never"],
    // eslint-disable no-unused-vars
    'no-unused-vars': 0,
    // disable max-len errors
    'max-len': ["error", { code: 1000 }],
    // require semicolons always
    'semi': ["error", "always"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
