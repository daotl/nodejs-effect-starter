const makeBase = require('./.eslintrc.base')

module.exports = function (dir, forceTS) {
  const base = makeBase(dir, forceTS)
  const rules = Object.keys(base.rules).reduce((prev, cur) => {
    // TODO
    if (cur !== 'codegen/codegen') {
      prev[cur] = base.rules[cur]
    }
    return prev
  }, {})

  return {
    ...base,
    parser: 'vue-eslint-parser',
    // extends: '@daotl/vue/typescript',
    extends: '../../node_modules/@daotl/eslint-config/typescript.js',
    overrides: [
      {
        files: '*.{ts,tsx,vue}',
        excludedFiles: ['*.mdx', '**/*.md/*.ts'],
        parserOptions: {
          project: ['tsconfig.json', 'cypress/tsconfig.json'],
        },
      },
    ],
    rules: {
      ...rules,
      'no-undef': 'off', // Turned off for `unplugin-auto-import`
    },
  }
}
