import { extractArgTypes, extractComponentDescription } from '@pxtrn/storybook-addon-docs-stencil';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import { defineCustomElements } from '../dist/esm/loader';
import docJson from '../dist/custom-elements.json';

defineCustomElements();
setStencilDocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
}
