import { View, Text } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { LOGIN } from 'constants/screen-names';

export type LoginProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof LOGIN
>;

export type LoginScreen = React.FC<LoginProps>;

const Login: LoginScreen = () => (
  <View>
    <Text>Login Screen</Text>
  </View>
);
export default Login;
