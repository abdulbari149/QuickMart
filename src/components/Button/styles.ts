import { StyleSheet } from 'react-native';

import { Colors, Spacing, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  button: {
    ...Layouts.centered,
    borderRadius: moderateScale(10),
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.horizontal.size20,
    paddingVertical: Spacing.vertical.size12,
    width: '100%',
    elevation: 5,
    shadowColor: Colors.cyan50,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
  },
  text: {
    color: Colors.white,
  },
});

export default styles;
