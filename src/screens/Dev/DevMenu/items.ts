import { DEV_STORY_BOOK } from 'constants/screen-names';
import type { DevNavigatorParamList } from 'navigation/types';

export interface DevMenuItem {
  label: string;
  params?: { [key: string]: unknown } | undefined;
  name: keyof DevNavigatorParamList;
}

export const items: Array<DevMenuItem> = [
  {
    label: 'Story book',
    name: DEV_STORY_BOOK,
  },
];
