import { View } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  RESET_PASSWORD,
  type EMAIL_VERIFICATION,
} from 'constants/screen-names';
import { Colors } from 'styles';
import type { PublicNavigatorParamList } from 'navigation/types';
import Typography from 'components/Typography';
import useFormState from 'hooks/use-form-state';

import Button from 'components/Button';

import CodeInput from 'components/CodeInput';
import { moderateScale } from 'utils/styles';

import styles from './styles';

export type EmailVerificationProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof EMAIL_VERIFICATION
>;

export type EmailVerificationScreen = React.FC<EmailVerificationProps>;

const EmailVerification: EmailVerificationScreen = ({ navigation }) => {
  const { handleChange } = useFormState({
    code: '',
  });

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Typography variant="heading2" mode="bold">
          Email Verification
        </Typography>
        <Typography
          variant="body2"
          mode="medium"
          style={{
            color: Colors.grey150,
            lineHeight: moderateScale(23),
            paddingTop: moderateScale(5),
          }}
        >
          Enter the 6-digit verification code send to your email address.
        </Typography>
      </View>
      <View style={styles.formContainer}>
        <CodeInput onChange={handleChange('code')} />
        <TouchableWithoutFeedback onPress={() => {}}>
          <Typography variant="body2" mode="medium" style={styles.resend}>
            Resend Code
          </Typography>
        </TouchableWithoutFeedback>
        <Button
          variant="contained"
          title="Proceed"
          style={{ button: styles.sendButton }}
          onPress={() => {
            navigation.navigate(RESET_PASSWORD);
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EmailVerification;
