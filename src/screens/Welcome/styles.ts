import { StyleSheet } from 'react-native';

import { Colors, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: moderateScale(25),
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
