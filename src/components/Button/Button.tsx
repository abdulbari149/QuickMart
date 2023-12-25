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

import type { OptionalPropertyOf } from 'types';

import styles from './styles';
import type {
  ButtonComponent,
  ButtonProps,
  ButtonVariants,
} from './button.types';

type VariantStyles = {
  button: ViewStyle;
  text: TextStyle;
};

const buttonVariantStyles: Record<ButtonVariants, VariantStyles> = {
  outlined: {
    button: {
      backgroundColor: Colors.white,
      borderColor: Colors.grey50,
      borderWidth: 1,
    },
    text: {
      color: Colors.black,
    },
  },
  contained: {
    button: {
      backgroundColor: Colors.black,
      borderColor: Colors.black,
      borderWidth: 1,
    },
    text: {
      color: Colors.white,
    },
  },
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
  IconRight: null,
  loading: false,
  loadingColor: 'white',
  disabled: false,
  onPress: (_event) => {},
};

const Button: ButtonComponent = (props) => {
  const {
    disabled,
    variant,
    title,
    loading,
    loadingColor,
    style,
    onPress,
    IconRight,
    ...other
  } = { ...defaultProps, ...props };

  const [isPressed, setIsPressed] = useState(false);

  const variantStyles = buttonVariantStyles[variant];

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
    ...(IconRight ? styles.buttonWithLeftIcon : {}),
  } as const;

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
        <Typography variant="button1" mode="semi-bold" style={textStyles}>
          {title}
        </Typography>
      )}
      {IconRight}
    </TouchableOpacity>
  );
};

export default Button;
