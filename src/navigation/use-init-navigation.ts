import React, { useCallback } from 'react';
import { DevSettings } from 'react-native';
import type {
  NavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';

import NavigationService from 'navigation/service';
import type { MainNavigatorParamList } from 'navigation/types';
import { DEV, DEV_MENU } from 'constants/screen-names';

type UseInitNavigationReturnType = {
  handleNavigationRef: (
    ref: NavigationContainerRef<MainNavigatorParamList> | null,
  ) => void;
  onStateChange: (state: NavigationState | undefined) => void;
};

const useInitNavigation = (): UseInitNavigationReturnType => {
  const routeNameRef = React.useRef<string | undefined>();
  const navigationRef =
    React.useRef<NavigationContainerRef<MainNavigatorParamList> | null>(null);

  React.useEffect(() => {
    if (navigationRef.current !== null) {
      const state = navigationRef.current.getRootState();
      routeNameRef.current = NavigationService.getActiveRouteName(state);
    }
  }, []);

  const handleNavigationRef = (
    ref: NavigationContainerRef<MainNavigatorParamList> | null,
  ): void => {
    navigationRef.current = ref;
    NavigationService.setTopLevelNavigator(ref);
    if (__DEV__) {
      DevSettings.addMenuItem('Show Dev Menu', () => {
        NavigationService.navigate(DEV, {
          screen: DEV_MENU,
        });
      });
    }
  };

  const onStateChange = useCallback(() => {
    // const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.current?.getCurrentRoute?.()?.name;

    // if (currentRouteName && previousRouteName !== currentRouteName) {
    //   analytics.setCurrentScreen(currentRouteName);
    // }
    routeNameRef.current = currentRouteName;
  }, []);

  return {
    handleNavigationRef,
    onStateChange,
  };
};

export default useInitNavigation;
