import type { TranslateOptions } from 'i18n-js';

import type { Locales } from 'locales/types';

export type SupportedLocales = 'en' | 'ur';

export interface LocalesProviderProps {
  children: React.ReactNode;
  defaultLocale: SupportedLocales;
  locale: SupportedLocales;
}

export type TranslateT = <t extends keyof Locales>(
  file: t,
) => (
  key: Extract<keyof Locales[t], string>,
  options?: TranslateOptions & { index?: number },
) => string;

export type LocalesContextType = {
  translate: TranslateT;
};

export type LocalesProviderComponent = React.FC<LocalesProviderProps>;
