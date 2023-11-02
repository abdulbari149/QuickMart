import type { StackNavigationOptions } from '@react-navigation/stack';

import type { DevNavigatorParamList, NavigationRoutes } from 'navigation/types';
import { DevMenu, DevStoryBook } from 'screens';
import { DEV_MENU, DEV_STORY_BOOK } from 'constants/screen-names';

export type DevNavigatorRoutes = NavigationRoutes<
  DevNavigatorParamList,
  StackNavigationOptions
>;

export const devNavigatorRoutes: DevNavigatorRoutes = {
  [DEV_MENU]: {
    component: DevMenu,
  },
  [DEV_STORY_BOOK]: {
    component: DevStoryBook,
  },
} as const;
