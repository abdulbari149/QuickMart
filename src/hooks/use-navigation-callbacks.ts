import { useRef } from 'react';

import useNavigation from 'hooks/use-navigation';
import type { MainNavigatorParamList } from 'navigation/types';

export type RouteNameOrOptions<RouteName extends keyof MainNavigatorParamList> =
  RouteName extends unknown
    ?
        | {
            key: string;
            params?: MainNavigatorParamList[RouteName];
            merge?: boolean;
          }
        | {
            name: RouteName;
            key?: string;
            params: MainNavigatorParamList[RouteName];
            merge?: boolean;
          }
    : never;

type UseNavigationCallbacksInput<
  RouteName extends keyof MainNavigatorParamList,
> = Array<RouteNameOrOptions<RouteName>>;

type UseNavigationCallbacksReturnType = Array<() => void>;

const useNavigationCallbacks = (
  routes: UseNavigationCallbacksInput<keyof MainNavigatorParamList>,
): UseNavigationCallbacksReturnType => {
  const { navigate } = useNavigation();

  const { current } = useRef(routes.map((route) => () => navigate(route)));
  return current;
};

export default useNavigationCallbacks;
