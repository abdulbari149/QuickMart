import React from 'react';
import type { TextInputProps } from 'react-native';
import { View, TextInput } from 'react-native';

import { Colors } from 'styles';

import type { OptionalPropertyOf } from 'types';
import Typography from 'components/Typography';

import type { InputComponent, InputProps } from './input.types';
import styles from './styles';

const defaultProps: Required<
  OptionalPropertyOf<Omit<InputProps, keyof TextInputProps>>
> = {
  containerStyle: {},
  textInputStyle: {},
  fieldStyle: {},
  labelStyle: {},
  InputLeftElement: null,
  InputRightElement: null,
  label: '',
};

const Input: InputComponent = (props) => {
  const {
    containerStyle,
    textInputStyle,
    fieldStyle,
    InputLeftElement,
    InputRightElement,
    labelStyle,
    label,
    ...restInput
  } = { ...defaultProps, ...props };
  return (
    <View style={styles.root}>
      {label ? (
        <View style={styles.labelContainer}>
          <Typography
            variant="body2"
            mode="medium"
            style={[labelStyle, { paddingLeft: 3 }]}
          >
            {label}
          </Typography>
          <Typography
            variant="body2"
            mode="medium"
            style={{ color: Colors.red }}
          >
            *
          </Typography>
        </View>
      ) : null}
      <View style={[styles.container, containerStyle]}>
        {InputLeftElement}
        <View style={[styles.textInputContainer, textInputStyle]}>
          <TextInput
            style={[styles.textInput, fieldStyle]}
            accessibilityLabel="input field"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={Colors.grey100}
            {...restInput}
          />
        </View>
        {InputRightElement}
      </View>
    </View>
  );
};

export default Input;
