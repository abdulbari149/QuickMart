import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: Spacing.vertical.size20,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: Colors.white,
    minHeight: Dimensions.height.size100,
  },
  quickMartLogo: {
    width: Dimensions.width.size32,
    height: Dimensions.height.size6,
  },
  header: {
    paddingVertical: Spacing.vertical.size20,
    gap: 5,
  },
  title: {},
  subtitle: {
    flexDirection: 'row',
    gap: 4,
  },
  formContainer: {
    marginTop: Spacing.vertical.size12,
    flexDirection: 'column',
    gap: Spacing.vertical.size16,
  },
  signupButton: {
    marginTop: Spacing.vertical.size16,
  },
  googleButton: {
    marginTop: Spacing.vertical.size16,
    borderColor: Colors.grey100,
  },
});

export default styles;
