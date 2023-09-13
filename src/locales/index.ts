import type { SupportedLocales } from 'context/locales/types';

import type { Locales } from './types';
import en from './en';
import ur from './ur';

const translations: Record<SupportedLocales, Locales> = {
  en,
  ur,
};

export default {
  translations,
};
