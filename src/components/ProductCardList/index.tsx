import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

import ProductCard, { ProductCardType } from '../ProductCard';
import { styles } from './styles';

type ProductCardListProps = {
  title: string;
  items: ProductCardType[];
  showMoreButton?: boolean;
};

const ProductCardList = ({
  title,
  items,
  showMoreButton = false,
}: ProductCardListProps) => {
  return (
    <View>
      <View style={styles.productCardListHeaderContainer}>
        <Text style={styles.productCardListTitle}>{title}</Text>
        {showMoreButton && (
          <Pressable>
            <Text style={styles.storeListShowMoreButtonText}>Ver mais</Text>
          </Pressable>
        )}
      </View>

      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item?.name}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={styles.productCardListSeparatorComponent} />
        )}
      />
    </View>
  );
};

export default ProductCardList;
