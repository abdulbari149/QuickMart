/* eslint-disable sort-keys */

import type { ThemeColors, ThemeMode } from 'context/theme/types';

export default {
  dark: {
    cyan: '#21D4B4',
    cyan50: '#F4FDFA',
    black: '#1C1B1B',
    white: '#ffffff',
    grey50: '#282828',
    grey100: '#C0C0C0',
    grey150: '#6F7384',
    red: '#EE4D4D',
    green: '#08E488',
    blue: '#1F8BDA',
    purple: '#4F1FDA',
    yellow: '#EBEF14',
    orange: '#F0821D',
    meriGold: '#FFCB45',
    brown: '#5A1A05',
    pink: '#CE1DEB',
  },
  light: {
    cyan: '#21D4B4',
    cyan50: '#F4FDFA',
    black: '#1C1B1B',
    white: '#ffffff',
    grey50: '#F4F5FD',
    grey100: '#C0C0C0',
    grey150: '#6F7384',
    red: '#EE4D4D',
    green: '#08E488',
    blue: '#1F8BDA',
    purple: '#4F1FDA',
    yellow: '#EBEF14',
    orange: '#F0821D',
    meriGold: '#FFCB45',
    brown: '#5A1A05',
    pink: '#CE1DEB',
  },
} satisfies Record<ThemeMode, ThemeColors>;
