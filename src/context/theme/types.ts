import type React from 'react';

export type ThemeMode = 'dark' | 'light';

export type ThemeColors = {
  cyan: string;
  cyan50: string;
  black: string;
  white: string;
  grey50: string;
  grey100: string;
  grey150: string;
  red: string;
  green: string;
  blue: string;
  purple: string;
  yellow: string;
  orange: string;
  meriGold: string;
  brown: string;
  pink: string;
};

export type ThemeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type StyledTheme = {
  colors: ThemeColors;
};

export type ThemeProviderComponent = React.FC<ThemeProviderProps>;
