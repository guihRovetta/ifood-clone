import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

export type ProductCardType = {
  store: {
    source: ImageSourcePropType;
  };
  source: ImageSourcePropType;
  name: string;
  price: string;
  priceFrom?: boolean;
  deliveryTime: number[];
  deliverFee?: string;
};

type ProductCardProps = {
  product: ProductCardType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { store, source, name, price, priceFrom, deliveryTime, deliverFee } =
    product || {};

  const [deliveryTimeMin, deliveryTimeMax] = deliveryTime || [0, 0];

  return (
    <View style={styles.productContainer}>
      <View style={styles.productHeaderContainer}>
        <Image source={source} resizeMode="cover" style={styles.productImage} />

        <View style={styles.productStoreContainer}>
          <Image
            source={store?.source}
            resizeMode="contain"
            style={styles.productStoreImage}
          />
        </View>
      </View>

      <View style={styles.productContentContainer}>
        <Text
          numberOfLines={2}
          style={[styles.productText, styles.productName]}
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.productText, styles.productPrice]}
        >
          {priceFrom ? `a partir de ${price}` : price}
        </Text>
      </View>

      <View style={styles.productFooterContainer}>
        <Text
          style={styles.productGenericText}
        >{`${deliveryTimeMin}-${deliveryTimeMax} min`}</Text>

        <View style={styles.productSeparator} />

        <Text style={styles.productGenericText}>{deliverFee}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
