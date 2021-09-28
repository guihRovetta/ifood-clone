import React from 'react';
import { View } from 'react-native';

import { express15minStoresList } from '../../data/express15minStoresList';
import { express30minStoresList } from '../../data/express30minStoresList';
import HorizontalStoreList from '../HorizontalStoreList';
import StoreItemList from '../StoreItemList';
import { styles } from './styles';

const Express = () => {
  return (
    <View>
      <View style={styles.horizontalStoreListWrapper}>
        <HorizontalStoreList
          title="Entrega em até 15 minutos"
          firstLineItems={express15minStoresList}
          showMoreButton
        />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList
          title="Entrega em até 30 minutos"
          items={express30minStoresList}
        />
      </View>
    </View>
  );
};

export default Express;
