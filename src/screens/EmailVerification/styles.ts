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
    // gap: Spacing.vertical.size16, 
  },
  sendButton: {
    marginTop: Spacing.vertical.size32,
  },
  resend: {
    textAlign: 'center',
    color: Colors.cyan,
    paddingTop: Spacing.vertical.size8,
    paddingRight: Spacing.horizontal.size4,
  },
});

export default styles;
