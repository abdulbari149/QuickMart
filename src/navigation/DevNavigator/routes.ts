import type { StackNavigationOptions } from '@react-navigation/stack';

import type { DevNavigatorParamList, ScreenConfig } from 'navigation/types';
import { DevMenu, DevStoryBook } from 'screens';
import { DEV_MENU, DEV_STORY_BOOK } from 'constants/screen-names';

export type DevNavigatorRoutes = {
  [DEV_MENU]: ScreenConfig<
    DevNavigatorParamList,
    typeof DEV_MENU,
    StackNavigationOptions
  >;
  [DEV_STORY_BOOK]: ScreenConfig<
    DevNavigatorParamList,
    typeof DEV_STORY_BOOK,
    StackNavigationOptions
  >;
};

export const devNavigatorRoutes: DevNavigatorRoutes = {
  [DEV_MENU]: {
    component: DevMenu,
  },
  [DEV_STORY_BOOK]: {
    component: DevStoryBook,
  },
} as const;
