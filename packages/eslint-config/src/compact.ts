import tseslint, { type ConfigArray } from 'typescript-eslint';

import baseConfig from './base.js';
import nodeJsConfig from './node.js';
import nestJsConfig from './nest.js';
import nextJsConfig from './next.js';
import reactJsConfig from './react.js';
import jestConfig from './jest.js';

/**
 * Main ESLint configuration that combines all specialized configs
 * Use this for projects that need all features
 */
const config: ConfigArray = tseslint.config(
  ...baseConfig,
  ...nodeJsConfig,
  ...nestJsConfig,
  ...nextJsConfig,
  ...reactJsConfig,
  ...jestConfig,
  {
    // Additional rules for package development
    files: ['**/packages/**/*.ts', '**/packages/**/*.tsx'],
    rules: {
      // Additional rules for package development
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
    },
  },
);

export default config;
