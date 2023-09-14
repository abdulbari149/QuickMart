import React from 'react';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import StorybookUI from 'storybook';

import type { DEV_STORY_BOOK } from 'constants/screen-names';
import type { DevNavigatorParamList } from 'navigation/types';

import styles from './styles';

type DevStoryBookProps = NativeStackScreenProps<
  DevNavigatorParamList,
  typeof DEV_STORY_BOOK
>;

type DevStoryBookScreen = React.FC<DevStoryBookProps>;

const DevStoryBook: DevStoryBookScreen = () => (
  <View style={styles.container}>
    <StorybookUI />
  </View>
);

export default DevStoryBook;
