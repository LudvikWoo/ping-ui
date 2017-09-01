// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    "no-irregular-whitespace": 0,
    "arrow-parens": 0,
    "indent": 0,
    "eol-last": 0,
    "semi": [0,"always"],
    "no-extra-semi": 0,
    "no-irregular-whitespace":0,
    "lines-around-comment": [0,{"beforeBlockComment":true}],
    // allow async-await
    'generator-star-spacing': 0,
    "no-unused-vars": ["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
