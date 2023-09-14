import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
    backgroundColor: Colors.white,
  },
  logo: {
    width: Dimensions.width.size75,
  },
});

export default styles;
