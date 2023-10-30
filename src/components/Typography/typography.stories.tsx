import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import config from './typography.config';
import Typography from './Typography';

export default {
  title: 'Typography',
  component: Typography,
} as Meta<typeof Typography>;

export const { playground, variants } = setupComponentStories(config);
