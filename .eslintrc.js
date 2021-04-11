module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
    jasmine: true,
    amd: true,
  },
  extends: [
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json',
    createDefaultProgram: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'max-lines': [
      'error',
      {
        max: 600,
        skipBlankLines: false,
        skipComments: false
      }
    ],
    'max-len': [
      1,
      150,
      2,
      {
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true
      }
    ],
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'global-require': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 0,
    // to adapt mongoose's _id property
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  }
};
