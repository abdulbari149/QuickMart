import { StyleSheet } from 'react-native';

import { Colors, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.centered,
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default styles;
