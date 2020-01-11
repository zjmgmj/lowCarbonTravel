module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'prettier/prettier': 'off',
    'space-before-function-paren': [0, "always"],
    'object-shorthand': 0,
    'no-trailing-spaces': 1,
    'unicorn/prefer-includes': 'off',
    'keyword-spacing': 1,
    'curly': 'off',
    'unicorn/escape-case': 'off',
    'no-debugger': 'off'
  }
}
