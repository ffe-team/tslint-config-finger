module.exports = {
  "jsRules": {
    // https://palantir.github.io/tslint/rules/align/
    "align": [
      true,
      "parameters",
      "arguments",
      "statements",
      "members",
      "elements",
    ],
    // https://palantir.github.io/tslint/rules/arrow-parens/
    "arrow-parens": [true, "ban-single-arg-parens"],
    // https://palantir.github.io/tslint/rules/arrow-return-shorthand/
    "arrow-return-shorthand": true,
    // https://palantir.github.io/tslint/rules/class-name/
    "class-name": true,
    // https://palantir.github.io/tslint/rules/comment-format/
    "comment-format": [
      true,
      "check-space",
      "check-lowercase",
      { "ignore-words": ["TODO", "FIXME", "BUG", "INFO", "ISSUE"] }
    ],
    // https://palantir.github.io/tslint/rules/completed-docs/
    "completed-docs": [
      true,
      {
        "classes": {"visibilities": ["exported"]},
        "enums": {"visibilities": ["exported"]},
        "interfaces": {"visibilities": ["exported"]},
        "functions": {"visibilities": ["exported"]},
        "methods": {"locations": "all", "privacies": "all"},
        "namespaces": {"visibilities": ["exported"]},
        "properties": {"locations": "all", "privacies": "all"},
        "types": {"visibilities": ["exported"]},
        "variables": {"visibilities": ["exported"]},
      }
    ],
    // https://palantir.github.io/tslint/rules/file-header/
    "file-header": false,
    // https://palantir.github.io/tslint/rules/import-spacing/
    "import-spacing": true,
    // https://palantir.github.io/tslint/rules/jsdoc-format/
    "jsdoc-format": false,
    // https://palantir.github.io/tslint/rules/newline-before-return/
    "newline-before-return": true,
    // https://palantir.github.io/tslint/rules/new-parens/
    "new-parens": true,
    // https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/
    "no-consecutive-blank-lines": false,
    // https://palantir.github.io/tslint/rules/no-irregular-whitespace/
    "no-irregular-whitespace": true,
    // https://palantir.github.io/tslint/rules/no-trailing-whitespace/
    "no-trailing-whitespace": [true, "ignore-template-strings"],
    // https://palantir.github.io/tslint/rules/no-unnecessary-callback-wrapper/
    "no-unnecessary-callback-wrapper": true,
    // https://palantir.github.io/tslint/rules/no-unnecessary-initializer/
    "no-unnecessary-initializer": true,
    // https://palantir.github.io/tslint/rules/number-literal-format/
    "number-literal-format": false,
    // https://palantir.github.io/tslint/rules/object-literal-key-quotes/
    "object-literal-key-quotes": [true, "as-needed"],
    // https://palantir.github.io/tslint/rules/object-literal-shorthand/
    "object-literal-shorthand": true,
    // https://palantir.github.io/tslint/rules/one-line/
    "one-line": false,
    // https://palantir.github.io/tslint/rules/one-variable-per-declaration/
    "one-variable-per-declaration": false,
    // https://palantir.github.io/tslint/rules/ordered-imports/
    "ordered-imports": false,
    // https://palantir.github.io/tslint/rules/prefer-function-over-method/
    "prefer-function-over-method": false,
    // https://palantir.github.io/tslint/rules/prefer-switch/
    "prefer-switch": [true, { "min-cases": 3 }],
    // https://palantir.github.io/tslint/rules/prefer-template/
    "prefer-template": [true, "allow-single-concat"],
    // https://palantir.github.io/tslint/rules/quotemark/
    "quotemark": [true, "single", "jsx-double", "avoid-escape"],
    // https://palantir.github.io/tslint/rules/semicolon/
    "semicolon": [true, "never", "ignore-bound-class-methods"],
    // https://palantir.github.io/tslint/rules/space-before-function-paren/
    "space-before-function-paren": false,
  },
  "rules": {
    // https://palantir.github.io/tslint/rules/align/
    "align": [
      true,
      "parameters",
      "arguments",
      "statements",
      "members",
      "elements",
    ],
    // https://palantir.github.io/tslint/rules/array-type/
    "array-type": [true, "array-simple"],
    // https://palantir.github.io/tslint/rules/arrow-parens/
    "arrow-parens": [true, "ban-single-arg-parens"],
    // https://palantir.github.io/tslint/rules/arrow-return-shorthand/
    "arrow-return-shorthand": true,
    // https://palantir.github.io/tslint/rules/callable-types/
    "callable-types": true,
    // https://palantir.github.io/tslint/rules/class-name/
    "class-name": true,
    // https://palantir.github.io/tslint/rules/comment-format/
    "comment-format": [
      true,
      "check-space",
      "check-lowercase",
      { "ignore-words": ["TODO", "FIXME", "BUG", "INFO", "ISSUE"] }
    ],
    // https://palantir.github.io/tslint/rules/completed-docs/
    "completed-docs": [
      true,
      {
        "classes": {"visibilities": ["exported"]},
        "enums": {"visibilities": ["exported"]},
        "interfaces": {"visibilities": ["exported"]},
        "functions": {"visibilities": ["exported"]},
        "methods": {"locations": "all", "privacies": "all"},
        "namespaces": {"visibilities": ["exported"]},
        "properties": {"locations": "all", "privacies": "all"},
        "types": {"visibilities": ["exported"]},
        "variables": {"visibilities": ["exported"]},
      }
    ],
    // https://palantir.github.io/tslint/rules/file-header/
    "file-header": false,
    // https://palantir.github.io/tslint/rules/import-spacing/
    "import-spacing": true,
    // https://palantir.github.io/tslint/rules/interface-name/
    "interface-name": false,
    // https://palantir.github.io/tslint/rules/interface-over-type-literal/
    "interface-over-type-literal": false,
    // https://palantir.github.io/tslint/rules/jsdoc-format/
    "jsdoc-format": false,
    // https://palantir.github.io/tslint/rules/match-default-export-name/
    "match-default-export-name": false,
    // https://palantir.github.io/tslint/rules/newline-before-return/
    "newline-before-return": true,
    // https://palantir.github.io/tslint/rules/new-parens/
    "new-parens": true,
    // https://palantir.github.io/tslint/rules/no-angle-bracket-type-assertion/
    "no-angle-bracket-type-assertion": true,
    // https://palantir.github.io/tslint/rules/no-boolean-literal-compare/
    "no-boolean-literal-compare": true,
    // https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/
    "no-consecutive-blank-lines": false,
    // https://palantir.github.io/tslint/rules/no-irregular-whitespace/
    "no-irregular-whitespace": true,
    // https://palantir.github.io/tslint/rules/no-parameter-properties/
    "no-parameter-properties": false,
    // https://palantir.github.io/tslint/rules/no-reference-import/
    "no-reference-import": false,
    // https://palantir.github.io/tslint/rules/no-trailing-whitespace/
    "no-trailing-whitespace": [true, "ignore-template-strings"],
    // https://palantir.github.io/tslint/rules/no-unnecessary-callback-wrapper/
    "no-unnecessary-callback-wrapper": true,
    // https://palantir.github.io/tslint/rules/no-unnecessary-initializer/
    "no-unnecessary-initializer": true,
    // https://palantir.github.io/tslint/rules/no-unnecessary-qualifier/
    "no-unnecessary-qualifier": true,
    // https://palantir.github.io/tslint/rules/number-literal-format/
    "number-literal-format": false,
    // https://palantir.github.io/tslint/rules/object-literal-key-quotes/
    "object-literal-key-quotes": [true, "as-needed"],
    // https://palantir.github.io/tslint/rules/object-literal-shorthand/
    "object-literal-shorthand": true,
    // https://palantir.github.io/tslint/rules/one-line/
    "one-line": false,
    // https://palantir.github.io/tslint/rules/one-variable-per-declaration/
    "one-variable-per-declaration": false,
    // https://palantir.github.io/tslint/rules/ordered-imports/
    "ordered-imports": false,
    // https://palantir.github.io/tslint/rules/prefer-function-over-method/
    "prefer-function-over-method": false,
    // https://palantir.github.io/tslint/rules/prefer-method-signature/
    "prefer-method-signature": true,
    // https://palantir.github.io/tslint/rules/prefer-switch/
    "prefer-switch": [true, { "min-cases": 3 }],
    // https://palantir.github.io/tslint/rules/prefer-template/
    "prefer-template": [true, "allow-single-concat"],
    // https://palantir.github.io/tslint/rules/quotemark/
    "quotemark": [true, "single", "jsx-double", "avoid-escape"],
    // https://palantir.github.io/tslint/rules/return-undefined/
    "return-undefined": false,
    // https://palantir.github.io/tslint/rules/semicolon/
    "semicolon": [true, "never", "ignore-bound-class-methods"],
    // https://palantir.github.io/tslint/rules/space-before-function-paren/
    "space-before-function-paren": false,
    // https://palantir.github.io/tslint/rules/variable-name/
    "variable-name": false,
    // https://palantir.github.io/tslint/rules/whitespace/
    "whitespace": false,
  },
}
