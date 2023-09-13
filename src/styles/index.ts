import { StyleSheet } from 'react-native';

import Colors from './colors';
import Dimensions from './dimensions';
import Spacing from './spacing';
import Layouts from './layouts';

const styleSheetMerge = <BaseStyles, DifferenceStyles>(
  baseStyle: StyleSheet.NamedStyles<BaseStyles>,
  ...diffStyles: StyleSheet.NamedStyles<DifferenceStyles>[]
): StyleSheet.NamedStyles<BaseStyles & DifferenceStyles> => {
  const mergedDiffStyles = diffStyles.reduce<
    StyleSheet.NamedStyles<DifferenceStyles>
  >(
    (obj, style) => ({ ...obj, ...style }),
    {} as StyleSheet.NamedStyles<DifferenceStyles>,
  );
  const allStyles = Object.assign(baseStyle, mergedDiffStyles);
  return StyleSheet.create(allStyles);
};

export { Colors, Dimensions, Spacing, Layouts, styleSheetMerge };
