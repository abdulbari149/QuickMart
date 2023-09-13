import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text, View } from 'react-native';

import useNavigation from 'hooks/use-navigation';

import type { DevNavigatorParamList } from 'navigation/types';
import type { DEV_MENU } from 'constants/screen-names';

import styles from '../styles';

import { items } from './items';
import DevList from './list';

type DevMenuProps = NativeStackScreenProps<
  DevNavigatorParamList,
  typeof DEV_MENU
>;

type DevMenuScreen = React.FC<DevMenuProps>;

const DevMenu: DevMenuScreen = () => {
  const { goBack } = useNavigation();
  return (
    <View style={[styles.container, styles.screenContainer]}>
      <Text style={styles.title}>Dev Menu For Testing</Text>
      <DevList items={items} handleBackPress={goBack} />
    </View>
  );
};

export default DevMenu;
