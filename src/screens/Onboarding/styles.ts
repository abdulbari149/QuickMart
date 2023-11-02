import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimensions.height.size4,
    backgroundColor: Colors.white,
  },
  pagination: {
    position: 'absolute',
    top: Dimensions.height.size90,
  },
  paginationItem: {
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
    marginHorizontal: 3,
    width: 10,
    height: 10,
  },
  paginationItemActive: {
    backgroundColor: Colors.primary,
  },
  paginationItemInactive: {
    backgroundColor: Colors.grey100,
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
    gap: 15,
    width: Dimensions.width.size100,
  },
  image: {
    width: Dimensions.width.size60,
    height: Dimensions.height.size30,
    alignSelf: 'center',
  },
  banner: {
    width: Dimensions.width.size90,
    height: Dimensions.height.size55,
    backgroundColor: Colors.cyan50,
    alignSelf: 'center',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    borderRadius: moderateScale(15),
    paddingVertical: Spacing.vertical.size16,
  },
  bannerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  logo: {},
  arrowLeft: {},
  button: {
    width: Dimensions.width.size90,
    paddingVertical: Spacing.vertical.size16,
    marginTop: Spacing.vertical.size12,
  },
});

export default styles;
