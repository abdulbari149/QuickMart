import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
  },
  title: {
    textAlign: 'center',
    color: Colors.black,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.grey150,
    paddingHorizontal: Spacing.horizontal.size20,
  },
  item: {
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    gap: 25,
  },
  image: {
    width: Dimensions.width.size65,
    height: Dimensions.height.size40,
    alignSelf: 'center',
  },
  banner: {
    width: Dimensions.width.size90,
    height: Dimensions.height.size55,
    backgroundColor: Colors.cyan50,
    alignSelf: 'center',
    ...Layouts.centered,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    borderRadius: moderateScale(25),
    paddingVertical: Spacing.vertical.size16,
  },
  bannerContent: {
    ...Layouts.centered,
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    gap: 15,
  },
  button: {
    width: Dimensions.width.size90,
    paddingVertical: Spacing.vertical.size16,
    marginTop: Spacing.vertical.size12,
  },
});

export default styles;
