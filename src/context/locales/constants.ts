import type { SupportedLocales } from './types';

export const supportedLocales: SupportedLocales[] = ['en', 'ur'];

export const localesRTL: Record<SupportedLocales, boolean> = {
  en: false,
  ur: true,
};

export const MAX_RETRIES_FETCH_LOCALE = 5;
export const SELECTED_LOCALE_KEY = '@locale/selected';
