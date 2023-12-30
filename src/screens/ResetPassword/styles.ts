import { StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: Colors.white,
  },
  header: {
    paddingVertical: Spacing.vertical.size20,
    gap: 5,
  },
  formContainer: {
    flexDirection: 'column',
    gap: Spacing.vertical.size16,
  },
  button: {
    marginTop: Spacing.vertical.size8,
  },
});

export default styles;
