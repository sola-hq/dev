/* eslint-disable sort-keys */

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';
import tseslint, { type ConfigArray } from 'typescript-eslint';

import baseConfig from './base.js';

/**
 * A custom ESLint configuration for Jest test files.
 */
export const jestConfig: ConfigArray = tseslint.config(
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,

      // Relax some rules in test files
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      // Jest specific rules
      'jest/expect-expect': [
        'warn',
        {
          assertFunctionNames: ['assert', 'expect'],
        },
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
    settings: {
      jest: {
        version: 'detect',
      },
    },
  },
);

export default jestConfig;
