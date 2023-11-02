import React from 'react';

import type { ComponentConfig } from 'storybook/utils/component-config';

import Typography from './Typography';
import type { TypographyProps } from './typography.types';
import styles from './styles';

const TypographyWrapper = (props: Omit<TypographyProps, 'children'>) => (
  <Typography {...props}>This is a text</Typography>
);

export default {
  argTypes: {
    variant: {
      control: {
        options: Object.keys(styles.typographyVariants),
        type: 'select',
      },
    },
  },
  component: TypographyWrapper,
  props: {
    ur: {},
    en: {
      variant: 'heading1',
    },
  },
  title: 'Typography',
} as ComponentConfig<typeof TypographyWrapper>;
