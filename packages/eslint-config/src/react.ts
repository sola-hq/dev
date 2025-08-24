import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint, { type ConfigArray } from 'typescript-eslint';

import baseConfig from './base.js';

/**
 * A custom ESLint configuration for libraries that use React.
 */
export const reactConfig: ConfigArray = tseslint.config(
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    ...pluginReact.configs.flat['recommended'],
    languageOptions: {
      ...pluginReact.configs.flat['recommended'].languageOptions,
      globals: globals.browser,
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // JSX quotes
      'jsx-quotes': ['error', 'prefer-single'],
      // JSX formatting
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      // React scope no longer necessary with new JSX transform.
      'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
      'react/jsx-fragments': 'error',
      'react/jsx-max-props-per-line': [
        'warn',
        {
          maximum: 1,
          when: 'always',
        },
      ],
      'react/jsx-newline': [
        'error',
        {
          prevent: true,
        },
      ],
      'react/jsx-no-bind': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          noSortAlphabetically: false,
        },
      ],
      'react/jsx-tag-spacing': [
        'error',
        {
          afterOpening: 'never',
          beforeClosing: 'never',
          beforeSelfClosing: 'always',
          closingSlash: 'never',
        },
      ],
      // Disable unnecessary rules
      'react/prop-types': 'off', // TypeScript handles this
      'react/react-in-jsx-scope': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
);

export default reactConfig;
