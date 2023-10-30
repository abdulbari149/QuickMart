import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width;
const screenHeight = height;

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;

const horizontalScale = (size: number): number =>
  Math.ceil((screenWidth / guidelineBaseWidth) * size);

const verticalScale = (size: number): number =>
  Math.ceil((screenHeight / guidelineBaseHeight) * size);

/**
 * Returns non-linear scale based on a resize factor (defaults to 0.51).
 * If normal horizontalScale will increase by +2X,
 * moderateScale will only increase it by +X.
 * @param size
 * @param factor
 */
const moderateScale = (size: number, factor: number = 0.51): number =>
  Math.ceil(size + (horizontalScale(size) - size) * factor);

const lineHeightScale = (fontSize: number, factor: number = 1) =>
  parseInt((moderateScale(fontSize) * factor).toString(), 10);

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  guidelineBaseWidth,
  lineHeightScale,
};
