/* eslint-disable no-await-in-loop */
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

import type { SupportedLocales } from 'context/locales/types';
import {
  supportedLocales,
  localesRTL,
  MAX_RETRIES_FETCH_LOCALE,
  SELECTED_LOCALE_KEY,
} from 'context/locales/constants';

const isValidLocale = (locale: string): locale is SupportedLocales =>
  supportedLocales.some((supportedLocale) => supportedLocale === locale);

const useCurrentLocale = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocale, setSelectedLocale] = useState<SupportedLocales>('en');

  const fetchLocale = async () => {
    let retries = MAX_RETRIES_FETCH_LOCALE;
    let isError: boolean = false;
    let locale: SupportedLocales = 'en';
    do {
      try {
        let storedLocale = await AsyncStorage.getItem(SELECTED_LOCALE_KEY);
        if (!storedLocale || !isValidLocale(storedLocale)) {
          storedLocale = 'en';
          await AsyncStorage.setItem(SELECTED_LOCALE_KEY, storedLocale);
        }
        locale = storedLocale as SupportedLocales;
        isError = false;
      } catch (error) {
        isError = true;
        retries -= 1;
      }
    } while (isError && retries > 0);
    if (retries === 0) return 'en';
    return locale;
  };

  const initLocale = useCallback(async () => {
    setIsLoading(true);
    const locale = await fetchLocale();
    setSelectedLocale(locale);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    initLocale();
  }, [initLocale]);

  const updateLocale = useCallback(
    async (newLocale: SupportedLocales): Promise<boolean> => {
      if (isLoading) return false;

      if (newLocale === selectedLocale) return false;

      await AsyncStorage.setItem(SELECTED_LOCALE_KEY, newLocale);

      I18nManager.forceRTL(localesRTL[newLocale]);
      setSelectedLocale(newLocale);
      RNRestart.Restart();
      return true;
    },
    [isLoading, selectedLocale],
  );

  return {
    isLoading,
    selectedLocale,
    updateLocale,
  };
};

export default useCurrentLocale;
