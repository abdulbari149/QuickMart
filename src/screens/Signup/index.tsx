import { Image, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Google from 'assets/svgs/google.svg';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { SIGNUP } from 'constants/screen-names';
import assets from 'assets';

import Typography from 'components/Typography';
import Button from 'components/Button';
import { Colors } from 'styles';
import Input from 'components/Input';

import { moderateScale } from 'utils/styles';

import styles from './styles';

export type SignupProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SIGNUP
>;

export type SignupScreen = React.FC<SignupProps>;

const Signup: SignupScreen = () => {
  React.useState('');
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={assets.images.quickMart}
        style={styles.quickMartLogo}
        resizeMode="contain"
      />
      <View style={styles.header}>
        <Typography variant="heading2" mode="bold" style={styles.title}>
          Signup
        </Typography>
        <View style={styles.subtitle}>
          <Typography
            variant="body2"
            mode="medium"
            style={{ color: Colors.grey150 }}
          >
            Already have an account?
          </Typography>
          <Typography
            variant="body2"
            mode="medium"
            style={{ color: Colors.cyan }}
          >
            Login
          </Typography>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Input label="Full Name" placeholder="Enter your full name" />
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Enter your password" />
        <Button
          variant="contained"
          title="Create Account"
          style={{ button: styles.signupButton }}
        />
      </View>
      <Button
        variant="outlined"
        title="Signup with Google"
        style={{
          button: styles.googleButton,
        }}
        IconRight={
          <Google width={moderateScale(24)} height={moderateScale(24)} />
        }
      />
    </KeyboardAwareScrollView>
  );
};

export default Signup;
