module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'semistandard'
  ],
  overrides: [],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'no-undef': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
    'indent': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-unused-vars': 'error',
    'linebreak-style': ['error', 'unix'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'max-params': ['error', 2],
    'react/prop-types': 0,
    '@typescript-eslint/indent': ['error', 2],
    'max-len': ['error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'import/newline-after-import': 'error',
    'import/order': ['error'],
    '@typescript-eslint/ban-ts-comment': ['warn']
  }
}
