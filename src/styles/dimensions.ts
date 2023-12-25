import { Dimensions as appDimensions } from 'react-native';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

import type { IntRange } from 'types';
import { moderateScale } from 'utils/styles';

const { width: screenWidth, height: screenHeight } =
  appDimensions.get('window');

type Range_1_100 = IntRange<1, 101>;
type Range_1_50 = IntRange<1, 51>;

type OrientationSizes = Record<`size${Range_1_100}`, number>;
type FontSizes = Record<`size${Range_1_50}`, number>;

const nums100 = Array(100)
  .fill(0)
  .map((_val, index) => index + 1) as Range_1_100[];

const nums50 = Array(50)
  .fill(0)
  .map((_val, index) => index + 1) as Range_1_50[];

const widthSizes = Object.fromEntries(
  nums100.map((num) => {
    const sizeKey = `size${num}`;
    return [sizeKey, width(num)] as const;
  }),
) as OrientationSizes;

const heightSizes = Object.fromEntries(
  nums100.map((num) => {
    const sizeKey = `size${num}`;
    return [sizeKey, height(num)] as const;
  }),
) as OrientationSizes;

const fontSizes = Object.fromEntries(
  nums50.map((num) => {
    const sizeKey = `size${num}`;
    return [sizeKey, moderateScale(num)] as const;
  }),
) as FontSizes;

const Dimensions = {
  height: heightSizes,
  screenHeight,
  screenWidth,
  width: widthSizes,
  fontSizes,
} as const;

export default Dimensions;
