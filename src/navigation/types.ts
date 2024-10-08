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
  FORGOT_PASSWORD,
  LOGIN,
  ONBOARDING,
  PUBLIC,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  SIGNUP,
  SPLASH,
  WELCOME,
  EMAIL_VERIFICATION,
} from 'constants/screen-names';

export type ScreensParamsList = {
  [DEV_MENU]: undefined;
  [DEV_STORY_BOOK]: undefined;
  [SPLASH]: undefined;
  [WELCOME]: undefined;
  [ONBOARDING]: undefined;
  [LOGIN]: undefined;
  [SIGNUP]: undefined;
  [FORGOT_PASSWORD]: undefined;
  [RESET_PASSWORD]: undefined;
  [RESET_PASSWORD_SUCCESS]: undefined;
  [EMAIL_VERIFICATION]: {
    from: typeof LOGIN | typeof FORGOT_PASSWORD;
  };
};

export type PublicScreens =
  | typeof SPLASH
  | typeof WELCOME
  | typeof ONBOARDING
  | typeof LOGIN
  | typeof SIGNUP
  | typeof FORGOT_PASSWORD
  | typeof RESET_PASSWORD
  | typeof RESET_PASSWORD_SUCCESS
  | typeof EMAIL_VERIFICATION;

export type PublicNavigatorParamList = Pick<ScreensParamsList, PublicScreens>;

export type DevScreens = typeof DEV_MENU | typeof DEV_STORY_BOOK;
export type DevNavigatorParamList = Pick<ScreensParamsList, DevScreens>;

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
