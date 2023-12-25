import type React from 'react';
import type { TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

import type { Colors } from 'styles';

export type ButtonVariants = 'contained' | 'outlined';
export type ButtonColors = 'primary' | 'secondary';
export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  disabled?: boolean;
  loading?: boolean;
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
  IconRight?: React.ReactNode;
  loadingColor?: keyof typeof Colors;
  title: string;
  variant: ButtonVariants;
}

export type ButtonComponent = React.FC<ButtonProps>;
