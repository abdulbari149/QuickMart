import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Image, View } from 'react-native';

import type { PublicNavigatorParamList } from 'navigation/types';
import { type SPLASH, ONBOARDING, LOGIN } from 'constants/screen-names';

import assets from 'assets';
import useBootstrapApp from 'hooks/use-bootstrap-app';

import Storage from 'utils/storage';
import { ONBOARDING_COMPLETE } from 'constants/storage';

import styles from './styles';

type SplashProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SPLASH
>;

type SplashScreen = React.FC<SplashProps>;

const Splash: SplashScreen = ({ navigation }) => {
  useBootstrapApp({
    async onComplete() {
      const isOnboardingComplete = await Storage.get(ONBOARDING_COMPLETE);
      if (isOnboardingComplete) {
        return navigation.navigate(LOGIN);
      }
      return navigation.navigate(ONBOARDING);
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
