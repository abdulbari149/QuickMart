/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar, View } from 'react-native';

import { Provider } from 'jotai';

import LocalesProvider from 'context/locales';
import useCurrentLocale from 'hooks/use-current-locale';

import { Colors, Dimensions } from 'styles';
import Navigation from 'navigation';

import useGoogleSignin from 'hooks/use-google-signin';

import store from './src/store/index';

const App = (): JSX.Element => {
  const { selectedLocale } = useCurrentLocale();
  useGoogleSignin();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <SafeAreaProvider>
        <Provider store={store}>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              paddingTop: Dimensions.height.size5,
              paddingBottom: Dimensions.height.size1,
            }}
          >
            <LocalesProvider defaultLocale="en" locale={selectedLocale}>
              <Navigation />
            </LocalesProvider>
          </View>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
