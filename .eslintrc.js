module.exports =
//     "env": {
//         "browser": true,
//         "es6": true
//     },
//     "extends": "standard",
//     "globals": {
//         "Atomics": "readonly",
//         "SharedArrayBuffer": "readonly"
//     },
//     "parserOptions": {
//         "ecmaVersion": 2018,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "vue",
//     ],
//     "rules": {
//       "indent": ["error", 2]
//     }
// };

{
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "standard",
      "plugin:vue/recommended"
  ],
  "parserOptions": {
      "parser": "babel-eslint",
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
  },
  "rules": {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
      "eqeqeq":"warn"
  }
}
