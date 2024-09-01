import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PublicNavigatorParamList } from 'navigation/types';
import {
  EMAIL_VERIFICATION,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from 'constants/screen-names';

import Typography from 'components/Typography';
import Button from 'components/Button';
import { Colors } from 'styles';
import Input from 'components/Input';
import useFormState from 'hooks/use-form-state';

import styles from './styles';

export type ForgotPasswordProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof FORGOT_PASSWORD
>;

export type ForgotPasswordScreen = React.FC<ForgotPasswordProps>;

const ForgotPassword: ForgotPasswordScreen = ({ navigation }) => {
  const { values, handleChange } = useFormState({
    email: '',
  });

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Typography variant="heading2" mode="bold">
          Confirmation Email
        </Typography>
        <Typography
          variant="body2"
          mode="medium"
          style={{ color: Colors.grey150 }}
        >
          Enter your email address for verification.
        </Typography>
      </View>
      <View style={styles.formContainer}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChangeText={handleChange('email')}
        />
        <Button
          variant="contained"
          title="Send"
          style={{ button: styles.sendButton }}
          onPress={() => {
            navigation.navigate(EMAIL_VERIFICATION, { from: FORGOT_PASSWORD });
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassword;
