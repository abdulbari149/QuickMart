/* eslint-disable filenames/match-exported */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

import { Colors } from 'styles';

import type {
  StyledTheme,
  ThemeContextType,
  ThemeMode,
  ThemeProviderComponent,
} from './types';

const initialState: ThemeContextType = {
  mode: 'light',
  toggleMode: () => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider: ThemeProviderComponent = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(initialState.mode);

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(
    () =>
      ({
        colors: Colors[mode],
      }) satisfies StyledTheme,
    [mode],
  );

  const contextValue = useMemo(
    (): ThemeContextType => ({ toggleMode, mode }),
    [toggleMode, mode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
