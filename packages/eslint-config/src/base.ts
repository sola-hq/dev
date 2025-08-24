/* eslint-disable sort-keys */

import type { ConfigArray } from 'typescript-eslint';

import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * A custom ESLint configuration for all projects.
 */
export const baseConfig: ConfigArray = tseslint.config(
  {
    ignores: [
      '**/.github/',
      '**/.vscode/',
      '**/.yarn/',
      '**/build/',
      '**/build-*/',
      '**/coverage/',
      '**/dist/',
      '**/node_modules/',
      '**/.turbo/',
      '**/.next/',
      '**/out/',
    ],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: true,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      import: importPlugin,
      n: nPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    settings: {
      'import/extensions': ['.js', '.cjs', '.mjs', '.ts', '.tsx'],
    },
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx'],
    rules: {
      // TypeScript best practices
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      // Unused variables configuration
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],

      // Code style
      'arrow-parens': ['error', 'always'],
      'brace-style': ['error', '1tbs'],
      curly: ['error', 'all'],
      'default-param-last': 'off', // conflicts with TS version
      'dot-notation': 'off', // conflicts with TS version
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'function-call-argument-newline': ['error', 'consistent'],

      // Import rules
      'import/export': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          cjs: 'always',
          js: 'always',
          json: 'always',
          jsx: 'never',
          mjs: 'always',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off', // conflicts with simple-import-sort

      // Basic rules
      indent: 'off', // required as 'off' since typescript-eslint has own versions
      'no-extra-semi': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',

      // Object and array formatting
      'object-curly-newline': [
        'error',
        {
          ExportDeclaration: { minProperties: 2048 },
          ImportDeclaration: { minProperties: 2048 },
          ObjectPattern: { minProperties: 2048 },
        },
      ],

      // Blank line rules
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
        { blankLine: 'always', next: 'block-like', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'block-like' },
        { blankLine: 'always', next: 'function', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'function' },
        { blankLine: 'always', next: 'try', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'try' },
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: 'import', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'import' },
        { blankLine: 'any', next: 'import', prev: 'import' },
      ],

      // Semicolons
      semi: ['error', 'always'],

      // Import sorting
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\u0000'], // side-effects (0 at start)
            ['^node:'], // node built-ins
            ['\u0000$', '^@nestjs-labs.*\u0000$', '^\\..*\u0000$'], // types (0 at end)
            ['^[^/\\.]'], // external packages
            ['^@nestjs-labs'], // internal packages
            [
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ], // relative imports
          ],
        },
      ],
      'sort-keys': [
        'warn',
        'asc',
        { caseSensitive: true, natural: false, minKeys: 2 },
      ],

      // Comments
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            markers: ['#__PURE__'],
          },
          line: {
            markers: ['/ <reference'],
          },
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
);

export default baseConfig;
