import React from 'react';
import { View } from 'react-native';

import Banner02 from '../../assets/market/wide-banners/2.jpeg';
import { marketAvailableMarketStoresList } from '../../data/marketAvailableMarketStoresList';
import { marketBannersList } from '../../data/marketBannersList';
import { marketCategoriesImageList } from '../../data/marketCategoriesImageList';
import { marketDrugstoreStoresListObject } from '../../data/marketDrugstoreStoresList';
import { marketMostRequestStoresList } from '../../data/marketMostRequestStoresList';
import { marketPetStoresList } from '../../data/marketPetStoresList';
import { marketStoreBigCardList } from '../../data/marketStoreBigCardList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';
import HorizontalStoreList from '../HorizontalStoreList';
import StoreBigCardList from '../StoreBigCardList';
import StoreItemList from '../StoreItemList';
import UltraWideBanner from '../UltraWideBanner';
import { styles } from './styles';

const Markets = () => {
  return (
    <View>
      <CategoryImageList items={marketCategoriesImageList} />

      <View style={styles.storeBigCardListWrapper}>
        <StoreBigCardList items={marketStoreBigCardList} />
      </View>

      <View style={styles.genericBannerListWrapper}>
        <BannersList items={marketBannersList} />
      </View>

      <View style={styles.genericUltraWideBannerWrapper}>
        <UltraWideBanner source={Banner02} />
      </View>

      <View style={styles.horizontalStoreListWrapper}>
        <HorizontalStoreList
          title="Mundo Pet"
          subtitle="Ração e itens pro seu cão, gato, peixinho…"
          firstLineItems={marketPetStoresList}
        />
      </View>

      <View
        style={[
          styles.horizontalStoreListWrapper,
          styles.secondHorizontalStoreListWrapper,
        ]}
      >
        <HorizontalStoreList
          title="Farmácia em casa"
          subtitle="Medicamentos, fralda para bebês e muito mais"
          firstLineItems={marketDrugstoreStoresListObject?.firstLine}
          secondLineItems={marketDrugstoreStoresListObject?.secondLine}
        />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList
          title="Mais pedidos"
          items={marketMostRequestStoresList}
        />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList
          title="Mercados disponíveis"
          items={marketAvailableMarketStoresList}
        />
      </View>
    </View>
  );
};

export default Markets;
