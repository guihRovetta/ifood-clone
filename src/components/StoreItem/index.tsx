import React from 'react';
import { ImageSourcePropType, View, Image, Text } from 'react-native';

import { colors } from '../../global/styles/colors';
import {
  SuperRestaurantIcon,
  StarIcon,
  DeliveryFeeIcon,
  CouponIcon,
} from '../../global/styles/icons';
import { styles } from './styles';

export type StoreInfoType = {
  name: string;
  rating?: number;
  source: ImageSourcePropType;
  category: string;
  distance: number;
  deliveryTime: number[];
  deliverFee?: string;
  isSuperRestaurant?: boolean;
  freeDelivery?: boolean;
  freeDeliveryAvailable?: boolean;
  coupon?: string;
};

type StoreItemProps = {
  storeInfo: StoreInfoType;
};

const StoreItem = ({ storeInfo }: StoreItemProps) => {
  const {
    name,
    rating,
    source,
    category,
    distance,
    deliveryTime,
    deliverFee,
    isSuperRestaurant,
    freeDelivery,
    freeDeliveryAvailable,
    coupon,
  } = storeInfo || {};

  const [deliveryTimeMin, deliveryTimeMax] = deliveryTime;

  return (
    <View style={styles.storeContainer}>
      <View style={styles.storeImageContainer}>
        <Image source={source} resizeMode="contain" style={styles.storeImage} />
      </View>

      <View style={styles.storeInfoContainer}>
        <View style={styles.storeHeaderContainer}>
          <Text style={styles.storeName} numberOfLines={1}>
            {name}
          </Text>
          {isSuperRestaurant && (
            <SuperRestaurantIcon width={12} height={12} fill={colors?.main} />
          )}
        </View>

        <View style={styles.storeContentContainer}>
          <View style={styles.storeRatingContainer}>
            {rating ? (
              <>
                <StarIcon width={10} height={10} fill={colors?.yellow} />
                <Text style={styles.storeRating}>{rating?.toFixed(1)}</Text>
              </>
            ) : (
              <Text style={styles.storeRating}>Novo!</Text>
            )}
          </View>

          <View style={styles.storeSeparator} />

          <Text style={styles.storeGenericText}>{category}</Text>

          <View style={styles.storeSeparator} />

          {!freeDelivery ? (
            <Text style={styles.storeGenericText}>{`${distance?.toFixed(
              1
            )} km`}</Text>
          ) : (
            <Text style={[styles.storeGenericText, styles.storeFreeDelivery]}>
              Grátis
            </Text>
          )}
        </View>

        <View style={styles.storeFooterContainer}>
          <Text
            style={styles.storeGenericText}
          >{`${deliveryTimeMin}-${deliveryTimeMax} min`}</Text>

          <View style={styles.storeSeparator} />

          <Text style={styles.storeGenericText}>{deliverFee}</Text>
        </View>

        {(coupon || freeDeliveryAvailable) && (
          <View style={styles.storeBenefictsContainer}>
            {coupon ? (
              <View style={styles.storeBenefictsWrapper}>
                <CouponIcon width={10} height={10} fill={colors?.blue} />
                <Text
                  style={styles.storeBenefictsText}
                >{`Cupom de ${coupon} disponível`}</Text>
              </View>
            ) : freeDeliveryAvailable ? (
              <View style={styles.storeBenefictsWrapper}>
                <DeliveryFeeIcon width={10} height={10} fill={colors?.blue} />
                <Text style={styles.storeBenefictsText}>
                  Entrega grátis disponível
                </Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default StoreItem;
