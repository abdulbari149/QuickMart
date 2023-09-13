import type { StackNavigationOptions } from '@react-navigation/stack';

import type { DevNavigatorParamList, ScreenConfig } from 'navigation/types';
import { DevMenu } from 'screens';
import { DEV_MENU } from 'constants/screen-names';

export type DevNavigatorRoutes = {
  [DEV_MENU]: ScreenConfig<
    DevNavigatorParamList,
    typeof DEV_MENU,
    StackNavigationOptions
  >;
};

export const devNavigatorRoutes: DevNavigatorRoutes = {
  [DEV_MENU]: {
    component: DevMenu,
  },
} as const;
