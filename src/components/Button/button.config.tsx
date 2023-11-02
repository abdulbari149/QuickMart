import type { ComponentConfig } from 'storybook/utils/component-config';

import Button from './Button';

export default {
  argTypes: {
    variant: {
      control: {
        options: ['contained', 'outlined'],
        type: 'select',
      },
    },
  },
  component: Button,
  title: 'Button',
  props: {
    ur: {},
    en: {
      variant: 'contained',
      title: 'Button',
      style: { button: { marginBottom: 10 } },
    },
  },
} satisfies ComponentConfig<typeof Button>;
