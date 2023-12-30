import { Image, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Google from 'assets/svgs/google.svg';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { LOGIN } from 'constants/screen-names';
import assets from 'assets';

import Typography from 'components/Typography';
import Button from 'components/Button';
import { Colors, Spacing } from 'styles';
import Input from 'components/Input';

import { moderateScale } from 'utils/styles';
import useFormState from 'hooks/use-form-state';

import styles from './styles';

const iconSize = moderateScale(20);

export type LoginProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof LOGIN
>;

export type LoginScreen = React.FC<LoginProps>;

const Login: LoginScreen = () => {
  const { values, handleChange } = useFormState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

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
          Login
        </Typography>
        <View style={styles.subtitle}>
          <Typography
            variant="body2"
            mode="medium"
            style={{ color: Colors.grey150 }}
          >
            Don&apos;t have an account?
          </Typography>
          <Typography
            variant="body2"
            mode="medium"
            style={{ color: Colors.cyan }}
          >
            Signup
          </Typography>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Input
          label="Email"
          value={values.email}
          onChangeText={handleChange('email')}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          value={values.password}
          onChangeText={handleChange('password')}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          InputRightElement={
            <TouchableOpacity
              style={{ paddingRight: Spacing.horizontal.size12 }}
              onPress={() => setShowPassword((prev) => !prev)}
            >
              <FontAwesomeIcon
                name={showPassword ? 'eye' : 'eye-slash'}
                color={Colors.grey150}
                size={iconSize}
              />
            </TouchableOpacity>
          }
        />

        <Typography variant="body2" mode="medium" style={styles.forgotPassword}>
          Forgot Password?
        </Typography>
        <Button
          variant="contained"
          title="Login"
          style={{ button: styles.signupButton }}
        />
      </View>
      <Button
        variant="outlined"
        title="Login with Google"
        style={{
          button: styles.googleButton,
        }}
        IconRight={
          <Google width={moderateScale(24)} height={moderateScale(24)} />
        }
      />
      <View style={styles.footer}>
        <Typography variant="caption" mode="semi-bold">
          By login, you agree to our
        </Typography>
        <Typography
          variant="caption"
          mode="semi-bold"
          style={{ color: Colors.blue }}
        >
          {' Privacy Policy '}
        </Typography>
        <Typography variant="caption" mode="semi-bold">
          and
        </Typography>
        <Typography
          variant="caption"
          mode="semi-bold"
          style={{ color: Colors.blue }}
        >
          {' Terms & Conditions.'}
        </Typography>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
