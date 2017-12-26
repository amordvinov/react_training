module.exports = {
  "extends": [
    "airbnb-base/legacy"
  ],
  "env": {
    "node": true,
    "browser": true,
    "jasmine": true,
    "es6": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParameters": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true
  },
  "rules": {
    "func-names": 0,
    "max-len": ["error", 140, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    "no-console": 0,
    "no-alert": 0,
    "no-restricted-syntax": 0,
    "no-loop-func": 0,
    "no-use-before-define": 0,
    "no-var": 0,
    "no-unused-vars": 0,
    "class-methods-use-this": 0,
    "object-shorthand": 0,
    "prefer-arrow-callback": 0,
    "vars-on-top": 0,
    "no-param-reassign": 0,
    "global-require": 0,
    "wrap-iife": 0
  }
};
