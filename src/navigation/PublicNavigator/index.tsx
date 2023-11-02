import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ONBOARDING, SPLASH, WELCOME } from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import { Onboarding, Splash, Welcome } from 'screens';

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
  </Stack.Navigator>
);
export default PublicNavigator;
