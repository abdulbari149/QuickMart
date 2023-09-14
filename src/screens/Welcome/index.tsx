import { View, Text } from 'react-native';
import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useTranslation } from 'context/locales';
import type { PublicNavigatorParamList } from 'navigation/types';
import type { WELCOME } from 'constants/screen-names';

import styles from './styles';

type WelcomeProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof WELCOME
>;

type WelcomeScreen = React.FC<WelcomeProps>;

const Welcome: WelcomeScreen = () => {
  const { t } = useTranslation('global');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('appName')}</Text>
    </View>
  );
};

export default Welcome;
