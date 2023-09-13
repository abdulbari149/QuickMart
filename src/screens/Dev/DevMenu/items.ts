import type { DevNavigatorParamList } from 'navigation/types';

export interface DevMenuItem {
  label: string;
  params?: { [key: string]: unknown } | undefined;
  name: keyof DevNavigatorParamList;
}

export const items: Array<DevMenuItem> = [];
