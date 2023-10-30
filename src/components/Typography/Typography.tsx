import type { TextStyle } from 'react-native';
import { Text } from 'react-native';
import React from 'react';

import { Colors, Dimensions } from 'styles';
import { lineHeightScale } from 'utils/styles';

import type {
  TypographyVariants,
  TypogrpahyComponent,
} from './typography.types';

export const typographyVariants: Record<TypographyVariants, TextStyle> = {
  heading1: {
    fontSize: Dimensions.fontSizes.size32,
    color: Colors.black,
    lineHeight: lineHeightScale(32, 1.2),
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: Dimensions.fontSizes.size24,
    color: Colors.black,
    lineHeight: lineHeightScale(24, 1.2),
    fontWeight: 'bold',
  },
  heading3: {
    fontSize: Dimensions.fontSizes.size18,
    color: Colors.black,
    lineHeight: lineHeightScale(18, 1.2),
    fontWeight: 'bold',
  },

  button1: {
    fontSize: Dimensions.fontSizes.size16,
    color: Colors.black,
    fontWeight: 'normal',
  },
  button2: {
    fontSize: Dimensions.fontSizes.size14,
    color: Colors.black,
    fontWeight: 'normal',
  },

  body1: {
    fontSize: Dimensions.fontSizes.size16,
    color: Colors.black,
    fontWeight: 'normal',
    lineHeight: lineHeightScale(16, 1.5),
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: Dimensions.fontSizes.size14,
    color: Colors.black,
    fontWeight: 'normal',
    lineHeight: lineHeightScale(14, 1.5),
    letterSpacing: 0.5,
  },
  caption: {
    fontSize: Dimensions.fontSizes.size12,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 0.5,
  },
  overline: {
    fontSize: Dimensions.fontSizes.size10,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 0.5,
  },
};

const Typography: TypogrpahyComponent = (props) => {
  const { variant, style, children, ...rest } = props;
  const variantStyles = typographyVariants[variant];
  return (
    <Text style={[variantStyles, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
