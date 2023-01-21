module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import'
  ],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/order': [
      'error',
      {
        'groups': [['builtin', 'external'], 'internal', ['index', 'sibling', 'parent', 'object']],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'pathGroups': [
          {
            'pattern': '@**/**',
            'group': 'external',
            'position': 'after'
          }
        ],
        'newlines-between': 'always-and-inside-groups',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "react-hooks/exhaustive-deps": 0,
  },
};
