import type React from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  fieldStyle?: TextInputProps['style'];
  InputLeftElement?: React.ReactNode;
  InputRightElement?: React.ReactNode;
  label?: string;
}

export type InputComponent = React.FC<InputProps>;
