import type {
  NavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/native';

import { PUBLIC, SPLASH } from 'constants/screen-names';

import type { MainNavigatorParamList } from 'navigation/types';

let navigator: NavigationContainerRef<MainNavigatorParamList> | null;

const setTopLevelNavigator = (
  navigatorRef: NavigationContainerRef<MainNavigatorParamList> | null,
): void => {
  navigator = navigatorRef;
};

const navigate = <RouteName extends keyof MainNavigatorParamList>(
  name: RouteName,
  params: MainNavigatorParamList[RouteName],
): void => {
  if (!navigator) {
    return;
  }

  // @ts-expect-error error due to types mismatch
  navigator.navigate(name, params);
};

const resetToRoot = (): void => {
  navigate(PUBLIC, {
    screen: SPLASH,
  });
};

const getActiveRoute = (
  state: NavigationState | PartialState<NavigationState> | undefined,
):
  | NavigationState['routes'][0]
  | PartialState<NavigationState>['routes'][0]
  | undefined => {
  if (!state || state.index === null || state.index === undefined)
    return undefined;
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRoute(route.state);
  }

  return route;
};

const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState> | undefined,
): string | undefined => {
  if (!state || state.index === null || state.index === undefined)
    return undefined;
  return getActiveRoute(state)?.name;
};

const getCurrentRouteName = (): string | undefined =>
  getActiveRouteName(navigator?.getRootState());

export default {
  getActiveRoute,
  getActiveRouteName,
  getCurrentRouteName,
  navigate,
  resetToRoot,
  setTopLevelNavigator,
};
