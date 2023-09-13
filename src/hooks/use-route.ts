/* eslint-disable no-restricted-imports  */
import { useRoute as useNativeRoute } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type { ScreensParamsList } from 'screens';

const useRoute = <T extends keyof ScreensParamsList>() =>
  useNativeRoute<StackScreenProps<ScreensParamsList, T>['route']>();

export default useRoute;
