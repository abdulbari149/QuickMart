import { Dimensions as appDimensions } from 'react-native';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

import type { IntRange } from 'types/utils';

const { width: screenWidth, height: screenHeight } =
  appDimensions.get('window');

type Range_1_100 = IntRange<1, 100>;

type OrientationSizes = Record<`size${Range_1_100}`, number>;

const nums = Array(100)
  .fill(0)
  .map((_val, index) => index + 1) as Range_1_100[];

const widthSizes = Object.fromEntries(
  nums.map((num) => {
    const sizeKey = `size${num}`;
    return [sizeKey, width(num)] as const;
  }),
) as OrientationSizes;

const heightSizes = Object.fromEntries(
  nums.map((num) => {
    const sizeKey = `size${num}`;
    return [sizeKey, height(num)] as const;
  }),
) as OrientationSizes;

const Dimensions = {
  height: heightSizes,
  screenHeight,
  screenWidth,
  width: widthSizes,
} as const;

export default Dimensions;
