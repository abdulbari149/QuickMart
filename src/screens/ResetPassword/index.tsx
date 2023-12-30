import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PublicNavigatorParamList } from 'navigation/types';
import {
  RESET_PASSWORD_SUCCESS,
  type RESET_PASSWORD,
} from 'constants/screen-names';

import Typography from 'components/Typography';
import Button from 'components/Button';
import { Colors } from 'styles';
import PasswordInput from 'components/PasswordInput';
import useFormState from 'hooks/use-form-state';

import styles from './styles';

export type ResetPasswordProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof RESET_PASSWORD
>;

export type ResetPasswordScreen = React.FC<ResetPasswordProps>;

const ResetPassword: ResetPasswordScreen = ({ navigation }) => {
  const { values, handleChange } = useFormState({
    password: '',
    confirmPassword: '',
  });

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Typography variant="heading2" mode="bold">
          New Password
        </Typography>
        <Typography
          variant="body2"
          mode="medium"
          style={{ color: Colors.grey150 }}
        >
          Enter your new password and remember it.
        </Typography>
      </View>
      <View style={styles.formContainer}>
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={values.password}
          onChangeText={handleChange('password')}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Enter your confirm password"
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
        />
        <Button
          variant="contained"
          title="Save"
          onPress={() => {
            navigation.navigate(RESET_PASSWORD_SUCCESS);
          }}
          style={{ button: styles.button }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;
