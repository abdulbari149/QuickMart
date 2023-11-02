import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Image, View } from 'react-native';

import type { PublicNavigatorParamList } from 'navigation/types';
import { WELCOME, type SPLASH } from 'constants/screen-names';

import assets from 'assets';
import useBootstrapApp from 'hooks/use-bootstrap-app';

import styles from './styles';

type SplashProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SPLASH
>;

type SplashScreen = React.FC<SplashProps>;

const Splash: SplashScreen = ({ navigation }) => {
  useBootstrapApp({
    onComplete() {
      return navigation.navigate(WELCOME);
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={assets.images.splashLogo}
        alt="Splash logo"
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
};

export default Splash;
