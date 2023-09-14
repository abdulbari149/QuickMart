import React, { useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PublicNavigatorParamList } from 'navigation/types';
import { WELCOME, type SPLASH } from 'constants/screen-names';

import assets from 'assets';
import useBootstrapApp from 'hooks/use-bootstrap-app';

import { Container, SplashLogo } from './styles';

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
    <Container>
      <SplashLogo
        source={assets.images.splashLogo}
        alt="Splash logo"
        resizeMode="contain"
      />
    </Container>
  );
};

export default Splash;
