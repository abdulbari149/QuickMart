import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Button from './Button';
import config from './button.config';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const { playground, variants } = setupComponentStories(config);
