import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  EMAIL_VERIFICATION,
  FORGOT_PASSWORD,
  LOGIN,
  ONBOARDING,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  SIGNUP,
  SPLASH,
  WELCOME,
} from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import {
  ForgotPassword,
  Login,
  Onboarding,
  ResetPassword,
  ResetPasswordSuccess,
  Signup,
  Splash,
  Welcome,
} from 'screens';
import { PasswordHeader } from 'components/Header';
import EmailVerification from 'screens/EmailVerification';

const Stack = createNativeStackNavigator<PublicNavigatorParamList>();

const PublicNavigator = () => (
  <Stack.Navigator
    initialRouteName={SPLASH}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={SPLASH} component={Splash} key={SPLASH} />
    <Stack.Screen name={ONBOARDING} component={Onboarding} key={ONBOARDING} />
    <Stack.Screen name={WELCOME} component={Welcome} key={WELCOME} />
    <Stack.Screen name={SIGNUP} component={Signup} key={SIGNUP} />
    <Stack.Screen name={LOGIN} component={Login} key={LOGIN} />
    
    <Stack.Group
      screenOptions={{
        header: PasswordHeader,
        headerShown: true,
      }}
    >
      <Stack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPassword}
        key={FORGOT_PASSWORD}
      />
      <Stack.Screen
        name={EMAIL_VERIFICATION}
        component={EmailVerification}
        key={EMAIL_VERIFICATION}
      />
      <Stack.Screen
        name={RESET_PASSWORD}
        component={ResetPassword}
        key={RESET_PASSWORD}
      />
    </Stack.Group>

    <Stack.Screen
      name={RESET_PASSWORD_SUCCESS}
      component={ResetPasswordSuccess}
      key={RESET_PASSWORD_SUCCESS}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default PublicNavigator;
