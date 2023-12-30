import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Input from 'components/Input';

import { Colors, Spacing } from 'styles';

import { moderateScale } from 'utils/styles';

import type { PasswordInputComponent } from './password-input.types';

const iconSize = moderateScale(20);

const PasswordInput: PasswordInputComponent = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      label="Password"
      secureTextEntry={!showPassword}
      placeholder="Enter your password"
      InputRightElement={
        <TouchableOpacity
          style={{ paddingRight: Spacing.horizontal.size12 }}
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <FontAwesome
            name={showPassword ? 'eye' : 'eye-slash'}
            color={Colors.grey150}
            size={iconSize}
          />
        </TouchableOpacity>
      }
      {...props}
    />
  );
};

export default PasswordInput;
