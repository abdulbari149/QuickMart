/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Platform, StatusBar, StyleSheet } from 'react-native';

import LocalesProvider from 'context/locales';
import useCurrentLocale from 'hooks/use-current-locale';
import Navigation from 'navigation';

import { Colors } from 'styles';
import ThemeProvider from 'context/theme';

const App: React.FC = () => {
  const { selectedLocale } = useCurrentLocale();

  const rootStyles = Platform.OS === 'android' ? styles.android : styles.ios;

  return (
    <GestureHandlerRootView style={rootStyles}>
      <StatusBar backgroundColor={Colors.light.white} barStyle="dark-content" />
      <SafeAreaProvider>
        <ThemeProvider>
          <LocalesProvider defaultLocale="en" locale={selectedLocale}>
            <Navigation />
          </LocalesProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  android: {
    flex: 1,
  },
  ios: {
    flex: 1,
    marginTop: 18,
  },
});

export default App;
