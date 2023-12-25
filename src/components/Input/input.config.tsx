import type { ComponentConfig } from 'storybook/utils/component-config';

import Input from './Input';

export default {
  argTypes: {
    InputLeftElement: {
      control: {
        options: [null],
        type: 'select',
      },
    },
    InputRightElement: {
      control: {
        options: [null],
        type: 'select',
      },
    },
    label: {
      control: {
        options: [undefined, 'Email Address'],
        type: 'select',
      },
    },
    placeholder: {
      control: {
        options: [undefined, 'Enter your email'],
        type: 'select',
      },
    },
  },
  props: {
    ur: {},
    en: {
      placeholder: 'Enter your email',
    },
  },
  title: 'Input',
  component: Input,
} satisfies ComponentConfig<typeof Input>;
