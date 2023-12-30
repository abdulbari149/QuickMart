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
    paddingBottom: Spacing.vertical.size24,
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
    marginTop: Spacing.vertical.size4,
  },
  googleButton: {
    marginTop: Spacing.vertical.size20,
    borderColor: Colors.grey100,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: Colors.cyan,
    paddingTop: Spacing.vertical.size8,
    paddingRight: Spacing.horizontal.size4,
  },
  footer: {
    // alignSelf: 'flex-end',
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    // paddingHorizontal: Spacing.horizontal.size4,
    // marginTop: Spacing.vertical.size16,
  },
});

export default styles;
