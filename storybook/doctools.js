/* eslint-disable import/no-extraneous-dependencies */
import { extractArgTypes } from '@storybook/react/dist/modern/client/docs/extractArgTypes';
import { addParameters, addArgTypesEnhancer } from '@storybook/react-native';
import { enhanceArgTypes } from '@storybook/docs-tools';

addArgTypesEnhancer(enhanceArgTypes);

addParameters({
  docs: {
    extractArgTypes,
  },
});
