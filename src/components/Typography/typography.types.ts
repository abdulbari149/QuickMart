import React, { type JSX } from 'react';
import type { TextProps } from 'react-native';

export type TypographyVariants =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'button1'
  | 'button2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

type TypographyMode = 'bold' | 'semi-bold' | 'regular' | 'medium';

export interface TypographyProps extends TextProps {
  variant: TypographyVariants;
  children: string | React.ReactNode;
  mode?: TypographyMode;
}
export type TypographyComponent = (props: TypographyProps) => JSX.Element;
