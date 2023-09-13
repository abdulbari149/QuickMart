import type { NavigatorScreenParams } from '@react-navigation/native';

import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type { StackNavigationOptions } from '@react-navigation/stack';

import type { DEV, DEV_MENU, PUBLIC, SPLASH } from 'constants/screen-names';

type DevMenuParams = undefined;
type SplashParams = undefined;

export type ScreensParamsList = {
  [DEV_MENU]: DevMenuParams;
  [SPLASH]: SplashParams;
};

export type PublicNavigatorParamList = Pick<ScreensParamsList, typeof SPLASH>;

export type DevNavigatorParamList = Pick<ScreensParamsList, typeof DEV_MENU>;

export type MainNavigatorParamList = {
  [DEV]: NavigatorScreenParams<DevNavigatorParamList>;
  [PUBLIC]: NavigatorScreenParams<PublicNavigatorParamList>;
};

export type ScreenConfig<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  ScreenName extends keyof List = keyof List,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  component: React.FunctionComponent<NativeStackScreenProps<List, ScreenName>>;
  options?: Options;
};
