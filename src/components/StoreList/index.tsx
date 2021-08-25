import React from 'react';
import {
  View,
  Text,
  Pressable,
  ViewProps,
  ImageSourcePropType,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Store from '../Store';
import { styles } from './styles';

type StoreListProps = ViewProps & {
  title: string;
  showMoreButton?: boolean;
  items: {
    source: ImageSourcePropType;
    label: string;
  }[];
};

const StoreList = ({
  title,
  showMoreButton = false,
  items,
  ...rest
}: StoreListProps) => {
  return (
    <View {...rest}>
      <View style={styles.storeListHeaderContainer}>
        <Text style={styles.storeListTitle}>{title}</Text>
        {showMoreButton && (
          <Pressable>
            <Text style={styles.storeListShowMoreButtonText}>Ver mais</Text>
          </Pressable>
        )}
      </View>

      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => (
          <Store source={item?.source} label={item?.label} />
        )}
        keyExtractor={(item) => item?.label}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={styles.storeListSeparatorComponent} />
        )}
      />
    </View>
  );
};

export default StoreList;
