/* eslint-disable filenames/match-exported */
import React, { useCallback, useContext, useMemo } from 'react';
import { I18n } from 'i18n-js';

import locales from 'locales';
import type { Locales } from 'locales/types';

import type {
  LocalesContextType,
  LocalesProviderComponent,
  TranslateT,
} from './types';

const initialState: LocalesContextType = {
  translate: () => () => '',
};

const LocalesContext = React.createContext(initialState);

const LocalesProvider: LocalesProviderComponent = ({
  children,
  defaultLocale,
  locale,
}): JSX.Element => {
  const i18n = useMemo(
    () =>
      new I18n(locales.translations, {
        defaultLocale,
        locale: locale || defaultLocale,
      }),
    [locale, defaultLocale],
  );

  const translate = useCallback<TranslateT>(
    (file) => (key, options) =>
      i18n.t(
        typeof options?.index === 'number'
          ? `${file}.${key}.${options?.index}`
          : `${file}.${key}`,
        options,
      ),
    [i18n],
  );
  const contextValue = useMemo(
    (): LocalesContextType => ({ translate }),
    [translate],
  );

  return (
    <LocalesContext.Provider value={contextValue}>
      {children}
    </LocalesContext.Provider>
  );
};

export const useTranslation = <t extends keyof Locales>(file: t) => {
  const { translate } = useContext<LocalesContextType>(LocalesContext);
  return { t: translate(file) };
};

export default LocalesProvider;
