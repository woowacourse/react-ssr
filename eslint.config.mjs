import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
      'no-console': 'warn',
      'eol-last': ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['server/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
];
