import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import type {
  DevNavigatorParamList,
  ScreenComponentType,
} from 'navigation/types';
import { DEV_MENU } from 'constants/screen-names';

import { devNavigatorRoutes } from './routes';

const Stack = createStackNavigator<DevNavigatorParamList>();

const DevNavigator = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName={DEV_MENU}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: false,
      headerShown: true,
    }}
  >
    {Object.entries(devNavigatorRoutes).map(([key, options]) => (
      <Stack.Screen
        key={key}
        name={key as keyof DevNavigatorParamList}
        component={
          options.component as ScreenComponentType<
            DevNavigatorParamList,
            keyof DevNavigatorParamList
          >
        }
        options={options.options}
      />
    ))}
  </Stack.Navigator>
);

export default DevNavigator;
