import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import { Colors } from 'styles';

export const decorators = [withBackgrounds];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'plain',
    values: [{ name: 'plain', value: Colors.background100 }],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
