import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    minHeight: Platform.select({
      ios: Dimensions.height.size100 - Dimensions.height.size6,
      android: Dimensions.height.size100,
    }),
    paddingTop: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: Colors.white,
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
    marginTop: Spacing.vertical.size8,
  },
  googleButton: {
    marginTop: Spacing.vertical.size16,
    borderColor: Colors.grey100,
  },
});

export default styles;
