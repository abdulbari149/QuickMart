import { Platform, StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 9,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingHorizontal: 1,
    width: '100%',
    ...Platform.select({
      ios: { paddingVertical: Spacing.vertical.size16 },
      android: { paddingVertical: Spacing.vertical.size8 },
    }),
  },
  textInputContainer: {
    flex: 1,
    paddingHorizontal: Spacing.horizontal.size12,
    flexDirection: 'column',
    gap: 2,
  },
  textInput: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  labelContainer: {
    flexDirection: 'row',
    gap: 3,
  },
  label: {
    color: `${Colors.white}aa`,
    fontSize: moderateScale(11),
    paddingHorizontal: 1,
  },
});

export default styles;
