import type { TextStyle } from 'react-native';

import { Colors, Dimensions } from 'styles';
import { lineHeightScale } from 'utils/styles';

import type { TypographyVariants } from './typography.types';

const typographyVariants: Record<TypographyVariants, TextStyle> = {
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

const typographyModes = {
  bold: 'bold',
  'semi-bold': '600',
  regular: '300',
  medium: 'normal',
} as const;

export default { typographyVariants, typographyModes };
