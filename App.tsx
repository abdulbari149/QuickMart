/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView, Text, View } from 'react-native';

import LocalesProvider, { useTranslation } from 'context/locales';
import useCurrentLocale from 'hooks/use-current-locale';

const Main = () => {
  const { t } = useTranslation('global');
  return (
    <View>
      <Text>Hello from {t('appName')}</Text>
    </View>
  );
};

const App: React.FC = () => {
  const { selectedLocale } = useCurrentLocale();

  return (
    <SafeAreaView>
      <LocalesProvider defaultLocale="en" locale={selectedLocale}>
        <Main />
      </LocalesProvider>
    </SafeAreaView>
  );
};

export default App;
