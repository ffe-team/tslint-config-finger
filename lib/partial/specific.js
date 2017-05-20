module.exports = {
  "jsRules": {
    // https://palantir.github.io/tslint/rules/member-ordering/
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "constructor",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    // https://palantir.github.io/tslint/rules/no-import-side-effect/
    "no-import-side-effect": [true, {"ignore-module": "(\\.html|\\.pug|\\.jade|\\.ejs|\\.hbs|\\.css|\\.less|\\.sass|\\.scss|\\.stylus|\\.styl)$"}],
    // https://palantir.github.io/tslint/rules/no-magic-numbers/
    "no-magic-numbers": true,
    // https://palantir.github.io/tslint/rules/no-reference/
    "no-reference": true,
    // https://palantir.github.io/tslint/rules/only-arrow-functions/
    "only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],
    // https://palantir.github.io/tslint/rules/prefer-for-of/
    "prefer-for-of": true,
    // https://palantir.github.io/tslint/rules/promise-function-async/
    "promise-function-async": false,
  },
  "rules": {
    // https://palantir.github.io/tslint/rules/adjacent-overload-signatures/
    "adjacent-overload-signatures": true,
    // https://palantir.github.io/tslint/rules/ban-types/
    "ban-types": false,
    // https://palantir.github.io/tslint/rules/member-access/
    "member-access": [
      true,
      "no-public",
      "check-accessor",
      "check-constructor"
    ],
    // https://palantir.github.io/tslint/rules/member-ordering/
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "constructor",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    // https://palantir.github.io/tslint/rules/no-any/
    "no-any": true,
    // https://palantir.github.io/tslint/rules/no-empty-interface/
    "no-empty-interface": true,
    // https://palantir.github.io/tslint/rules/no-import-side-effect/
    "no-import-side-effect": [true, {"ignore-module": "(\\.html|\\.pug|\\.jade|\\.ejs|\\.hbs|\\.css|\\.less|\\.sass|\\.scss|\\.stylus|\\.styl)$"}],
    // https://palantir.github.io/tslint/rules/no-inferrable-types/
    "no-inferrable-types": false,
    // https://palantir.github.io/tslint/rules/no-internal-module/
    "no-internal-module": true,
    // https://palantir.github.io/tslint/rules/no-magic-numbers/
    "no-magic-numbers": true,
    // https://palantir.github.io/tslint/rules/no-namespace/
    "no-namespace": [true, "allow-declarations"],
    // https://palantir.github.io/tslint/rules/no-non-null-assertion/
    "no-non-null-assertion": true,
    // https://palantir.github.io/tslint/rules/no-reference/
    "no-reference": true,
    // https://palantir.github.io/tslint/rules/no-unnecessary-type-assertion/
    "no-unnecessary-type-assertion": true,
    // https://palantir.github.io/tslint/rules/no-var-requires/
    "no-var-requires": true,
    // https://palantir.github.io/tslint/rules/only-arrow-functions/
    "only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],
    // https://palantir.github.io/tslint/rules/prefer-for-of/
    "prefer-for-of": true,
    // https://palantir.github.io/tslint/rules/promise-function-async/
    "promise-function-async": false,
    // https://palantir.github.io/tslint/rules/typedef/
    "typedef": [true, "call-signature", "arrow-call-signature", "parameter", "arrow-parameter", "property-declaration", "variable-declaration", "member-variable-declaration"],
    // https://palantir.github.io/tslint/rules/typedef-whitespace/
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace",
      }
    ],
    // https://palantir.github.io/tslint/rules/unified-signatures/
    "unified-signatures": true,
  }
}
