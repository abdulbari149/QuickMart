import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Input from './Input';
import inputConfig from './input.config';

export default {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export const { playground, variants } = setupComponentStories(inputConfig);
