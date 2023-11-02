import type React from 'react';
import type { TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

import type { Colors } from 'styles';

export type ButtonVariants = 'contained' | 'outlined';
export type ButtonColors = keyof typeof Colors;
export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  disabled?: boolean;
  loading?: boolean;
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
  loadingColor?: ButtonColors;
  title: string;
  variant: ButtonVariants;
  color: ButtonColors;
}

export type ButtonComponent = React.FC<ButtonProps>;
