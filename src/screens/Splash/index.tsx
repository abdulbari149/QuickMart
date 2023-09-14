import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
  const { isAppReady } = useBootstrapApp();

  useEffect(() => {
    if (isAppReady) {
      navigation.navigate(WELCOME);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [isAppReady]);

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
