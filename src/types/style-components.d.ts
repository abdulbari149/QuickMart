import type { ThemeColors } from '../context/theme/types';

import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: ThemeColors;
  }
}
