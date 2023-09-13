import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SPLASH } from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import { publicNavigatorRoutes } from './routes';

const Stack = createNativeStackNavigator<PublicNavigatorParamList>();

const PublicNavigator = () => (
  <Stack.Navigator
    initialRouteName={SPLASH}
    screenOptions={{
      headerShown: false,
    }}
  >
    {Object.entries(publicNavigatorRoutes).map(([key, options]) => (
      <Stack.Screen
        key={key}
        name={key as keyof PublicNavigatorParamList}
        component={options.component}
        options={options?.options ?? {}}
      />
    ))}
  </Stack.Navigator>
);
export default PublicNavigator;
