import type { PublicNavigatorParamList, ScreenConfig } from 'navigation/types';
import { Splash } from 'screens';
import { SPLASH } from 'constants/screen-names';

export type PublicNavigatorRoutes = {
  [SPLASH]: ScreenConfig<PublicNavigatorParamList, typeof SPLASH>;
};

export const publicNavigatorRoutes: PublicNavigatorRoutes = {
  [SPLASH]: {
    component: Splash,
  },
} as const;
