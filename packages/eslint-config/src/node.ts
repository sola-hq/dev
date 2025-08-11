import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint, { type ConfigArray } from 'typescript-eslint';

import baseConfig from './base.js';

export const nodeConfig: ConfigArray = tseslint.config(
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {
      // Node.js specific rules
      'n/no-missing-import': 'error',
      'n/no-unpublished-import': 'error',
      'n/no-unsupported-features/es-syntax': 'error',
      'n/no-unsupported-features/node-builtins': 'error',
      'n/process-exit-as-throw': 'error',
      'n/shebang': 'error',

      // Relax some TypeScript rules for Node.js
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
    },
  },
);

export default nodeConfig;
