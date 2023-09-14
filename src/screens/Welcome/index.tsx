import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text, TouchableOpacity } from 'react-native';

import { useTranslation } from 'context/locales';
import type { PublicNavigatorParamList } from 'navigation/types';
import type { WELCOME } from 'constants/screen-names';

import { useTheme } from 'context/theme';

import { AppText, Container } from './styles';

type WelcomeProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof WELCOME
>;

type WelcomeScreen = React.FC<WelcomeProps>;

const Welcome: WelcomeScreen = () => {
  const { t } = useTranslation('global');
  const { toggleMode } = useTheme();
  return (
    <Container>
      <AppText>{t('appName')}</AppText>
      <TouchableOpacity onPress={toggleMode}>
        <Text>toggle mode</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Welcome;
