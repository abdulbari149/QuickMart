import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing, Dimensions } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: 'white',
  },
  itemContainer: {
    ...Layouts.horizontalContainer,
    alignItems: 'center',
    borderBottomColor: Colors.dark.black,
    borderBottomWidth: 1,
    height: Dimensions.height.size7,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.horizontal.size24,
  },
  text: {
    color: Colors.dark.black,
  },
  title: {
    paddingVertical: Spacing.vertical.size12,
    color: Colors.dark.black,
    textAlign: 'center',
    fontSize: moderateScale(20),
  },
  screenContainer: {
    paddingVertical: Spacing.vertical.size12,
  },
});

export default styles;
