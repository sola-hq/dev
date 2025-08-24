import { type ConfigArray } from 'typescript-eslint';

import baseConfig from './base.js';
import jestConfig from './jest.js';
import nestConfig from './nest.js';
import nextConfig from './next.js';
import nodeConfig from './node.js';
import reactConfig from './react.js';

/**
 * A custom ESLint configuration for all projects.
 */
export const allConfig: ConfigArray = [
  ...baseConfig,
  ...jestConfig,
  ...nestConfig,
  ...nextConfig,
  ...nodeConfig,
  ...reactConfig,
];

export default allConfig;
