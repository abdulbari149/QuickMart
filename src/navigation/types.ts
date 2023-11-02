/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type { StackNavigationOptions } from '@react-navigation/stack';

import type {
  DEV,
  DEV_MENU,
  DEV_STORY_BOOK,
  PUBLIC,
  SPLASH,
  WELCOME,
} from 'constants/screen-names';

type DevMenuParams = undefined;
type DevStoryBookParams = undefined;
type SplashParams = undefined;
type WelcomeParams = undefined;

export type ScreensParamsList = {
  [DEV_MENU]: DevMenuParams;
  [DEV_STORY_BOOK]: DevStoryBookParams;
  [SPLASH]: SplashParams;
  [WELCOME]: WelcomeParams;
};

export type PublicNavigatorParamList = Pick<
  ScreensParamsList,
  typeof SPLASH | typeof WELCOME
>;

export type DevNavigatorParamList = Pick<
  ScreensParamsList,
  typeof DEV_MENU | typeof DEV_STORY_BOOK
>;

export type MainNavigatorParamList = {
  [DEV]: NavigatorScreenParams<DevNavigatorParamList>;
  [PUBLIC]: NavigatorScreenParams<PublicNavigatorParamList>;
};

export type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

type ScreenConfig<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  ScreenName extends keyof List = keyof List,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  component: React.FC<NativeStackScreenProps<List, ScreenName>>;
  options?: Options;
};

export type NavigationRoutes<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  [ScreenName in keyof List]: ScreenConfig<List, ScreenName, Options>;
};
