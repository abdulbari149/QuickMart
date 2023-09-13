import { Dimensions } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const ScreenDimensions = {
  height: Math.round(Dimensions.get('window').height),
  width: Math.round(Dimensions.get('window').width),
};
