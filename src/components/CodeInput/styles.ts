import { StyleSheet } from 'react-native';

import { Colors } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  codeFieldRoot: { marginVertical: moderateScale(5) },
  cell: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderWidth: 2,
    borderRadius: moderateScale(10),
    borderColor: Colors.grey50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: Colors.cyan,
  },
});

export default styles;
