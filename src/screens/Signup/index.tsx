import { View, Text } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { SIGNUP } from 'constants/screen-names';

export type SignupProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SIGNUP
>;

export type SignupScreen = React.FC<SignupProps>;

const Signup: SignupScreen = () => (
  <View>
    <Text>Signup Screen</Text>
  </View>
);

export default Signup;
