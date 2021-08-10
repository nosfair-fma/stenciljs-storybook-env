import { Config } from '@stencil/core';
import {sass} from "@stencil/sass";

export const config: Config = {
  namespace: 'stenciljs-storybook-env',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-json',
      file: 'dist/custom-elements.json'
    },
  ],
};
