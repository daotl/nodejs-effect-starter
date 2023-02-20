module.exports = (dirName, forceTS = false) => {
  const enableTS = !!dirName && (forceTS || process.env.ESLINT_TS)
  return {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      // https://github.com/typescript-eslint/typescript-eslint/issues/2094
      EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      enableTS,
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ...(enableTS
        ? {
            tsconfigRootDir: dirName,
            project: [
              './tsconfig.json',
              './tsconfig.src.json',
              './tsconfig.test.json',
            ],
          }
        : undefined),
    },
    plugins: ['@typescript-eslint', 'codegen'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '.',
              message:
                'Please import from the specific file instead. Imports from index in the same directory are almost always wrong (circular).',
            },
            {
              name: './',
              message:
                'Please import from the specific file instead. Imports from index in the same directory are almost always wrong (circular).',
            },
            {
              name: './index',
              message:
                'Please import from the specific file instead. Imports from index in the same directory are almost always wrong (circular).',
            },
          ],
        },
      ],

      'codegen/codegen': [
        'error',
        {
          presets: require('@daotl/effect-app-eslint-codegen-model/dist/presets/barrel'),
        },
      ],
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      },
    ],
  }
}
