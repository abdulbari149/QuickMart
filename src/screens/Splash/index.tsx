import { View, Text } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { SPLASH } from 'constants/screen-names';

type SplashProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SPLASH
>;

type SplashScreen = React.FC<SplashProps>;

const Splash: SplashScreen = () => (
  <View style={{ flex: 1 }}>
    <Text>Splash</Text>
  </View>
);

export default Splash;
