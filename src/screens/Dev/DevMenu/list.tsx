import React, { useCallback } from 'react';
import { FlatList, View, Text, Pressable } from 'react-native';
import type { FlatListProps } from 'react-native';

import useNavigation from 'hooks/use-navigation';

import { DEV } from 'constants/screen-names';

import styles from '../styles';

import type { DevMenuItem } from './items';

const RouteDevItem = (item: DevMenuItem): JSX.Element => {
  const { navigate } = useNavigation();

  const navigateTosScreen = useCallback(() => {
    navigate(DEV, { screen: item.name });
  }, [item.name, navigate]);

  return (
    <Pressable onPress={navigateTosScreen} style={styles.itemContainer}>
      <Text style={styles.text}>{item.label}</Text>
    </Pressable>
  );
};

const keyExtractor = (item: DevMenuItem): string => item.label;

const renderItem = ({ item }: { item: DevMenuItem }): JSX.Element => (
  <RouteDevItem {...item} />
);

interface Props
  extends Omit<Omit<FlatListProps<DevMenuItem>, 'data'>, 'renderItem'> {
  items: DevMenuItem[];
  handleBackPress?: () => void;
}

const List = ({ items, ...props }: Props): JSX.Element => (
  <View style={styles.container}>
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      {...props}
    />
  </View>
);

export default List;
