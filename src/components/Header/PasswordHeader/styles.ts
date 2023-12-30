import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingVertical: Spacing.vertical.size12 + 2,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.width.size100,
    borderBottomColor: Colors.grey50,
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: Spacing.horizontal.size12,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  step: {},
  totalSteps: {
    color: Colors.grey100,
  },
});

export default styles;
