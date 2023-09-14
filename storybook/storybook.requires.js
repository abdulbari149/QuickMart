/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from '@storybook/react-native';

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';
import getStories from './get-stories';

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require('react-native').LogBox.ignoreLogs([
      '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

configure(getStories, module, false);
