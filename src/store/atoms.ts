import { atom } from 'jotai';

import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ONBOARDING_COMPLETE } from 'constants/storage';
import type { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import type { AllOptionalKeys } from 'types';

export const isOnboardingCompleteAtom = atomWithStorage(
  ONBOARDING_COMPLETE,
  false,
  createJSONStorage(() => AsyncStorage),
  { getOnInit: true },
);

export const initialRouteNameAtom = atom<
  AllOptionalKeys<PublicNavigatorParamList>
>(SCREENS.SPLASH);
