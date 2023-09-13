/* eslint-disable no-restricted-imports  */
import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import type { MainNavigatorParamList } from 'navigation/types';

const useNavigation = () =>
  useNativeNavigation<StackNavigationProp<MainNavigatorParamList>>();

export default useNavigation;
