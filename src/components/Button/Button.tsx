import React, { useState } from 'react';
import type {
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import { Colors } from 'styles';

import Typography from 'components/Typography';

import type { OptionalPropertyOf } from 'types/utils';

import styles from './styles';
import type {
  ButtonColors,
  ButtonComponent,
  ButtonProps,
  ButtonVariants,
} from './button.types';

type VariantReturnObj = (color: ButtonColors) => {
  button: ViewStyle;
  text: TextStyle;
};

const buttonVariantStyles: Record<ButtonVariants, VariantReturnObj> = {
  outlined: (color) => ({
    button: {
      backgroundColor: Colors.white,
      borderColor: Colors[color],
      borderWidth: 2,
    },
    text: {
      color: Colors[color],
    },
  }),
  contained: (color) => ({
    button: {
      backgroundColor: Colors[color],
    },
    text: {
      color: Colors.white,
    },
  }),
};

const defaultProps: Required<
  OptionalPropertyOf<
    Omit<
      ButtonProps,
      keyof Omit<TouchableOpacityProps, 'style' | 'disabled' | 'onPress'>
    >
  >
> = {
  style: {
    button: {},
    text: {},
  },
  loading: false,
  loadingColor: 'white',
  disabled: false,
  onPress: (_event) => {},
};

const Button: ButtonComponent = (props) => {
  const {
    disabled,
    variant,
    color,
    title,
    loading,
    loadingColor,
    style,
    onPress,
    ...other
  } = Object.assign(defaultProps, props);

  const [isPressed, setIsPressed] = useState(false);

  const variantStyles = buttonVariantStyles[variant](color);

  const handlePress = async (event: GestureResponderEvent) => {
    setIsPressed(true);
    await Promise.resolve(onPress(event));
    setIsPressed(false);
  };

  const isLoading = loading || isPressed;
  const isDisabled = isLoading || disabled;

  const buttonStyles = {
    ...styles.button,
    ...variantStyles.button,
    ...(style?.button ?? {}),
  };

  const textStyles = {
    ...styles.text,
    ...variantStyles.text,
    ...(style?.text ?? {}),
  };

  return (
    <TouchableOpacity
      {...other}
      disabled={isDisabled}
      style={buttonStyles}
      onPress={handlePress}
    >
      {isLoading ? (
        <ActivityIndicator size={18} color={Colors[loadingColor]} />
      ) : (
        <Typography variant="button1" style={textStyles}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default Button;
