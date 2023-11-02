import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View } from 'react-native';

import { useTranslation } from 'context/locales';
import type { PublicNavigatorParamList } from 'navigation/types';
import type { WELCOME } from 'constants/screen-names';

import Typography from 'components/Typography';

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
      <Typography variant="body1">{t('appName')}</Typography>
    </View>
  );
};

export default Welcome;
