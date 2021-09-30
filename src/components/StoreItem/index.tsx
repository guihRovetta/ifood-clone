import React, { useState } from 'react';
import {
  ImageSourcePropType,
  View,
  Image,
  Text,
  Pressable,
} from 'react-native';

import { colors } from '../../global/styles/colors';
import {
  SuperRestaurantIcon,
  StarIcon,
  DeliveryFeeIcon,
  CouponIcon,
  HeartOutlinedIcon,
  HeartFilledIcon,
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
  isFavorite?: boolean;
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
    isFavorite,
  } = storeInfo || {};

  const [deliveryTimeMin, deliveryTimeMax] = deliveryTime;

  const [favorite, setFavorite] = useState(!!isFavorite);

  const handleFavoriteStore = () => {
    setFavorite((previousState) => !previousState);
  };

  return (
    <View style={styles.storeContainer}>
      <View style={styles.storeImageContainer}>
        <Image source={source} resizeMode="contain" style={styles.storeImage} />
      </View>

      <View style={styles.storeInfoContainer}>
        <View style={styles.storeHeaderContainer}>
          <View style={styles.storeHeaderNameContainer}>
            <Text style={styles.storeName} numberOfLines={1}>
              {name}
            </Text>
            {isSuperRestaurant && (
              <SuperRestaurantIcon width={12} height={12} fill={colors?.main} />
            )}
          </View>
          <Pressable onPress={handleFavoriteStore}>
            {favorite ? (
              <HeartFilledIcon width={16} height={16} fill={colors?.main} />
            ) : (
              <HeartOutlinedIcon width={16} height={16} fill={colors?.gray} />
            )}
          </Pressable>
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

          <Text style={styles.storeGenericText}>{`${distance?.toFixed(
            1
          )} km`}</Text>
        </View>

        <View style={styles.storeFooterContainer}>
          <Text
            style={styles.storeGenericText}
          >{`${deliveryTimeMin}-${deliveryTimeMax} min`}</Text>

          <View style={styles.storeSeparator} />

          {freeDelivery ? (
            <Text style={[styles.storeGenericText, styles.storeFreeDelivery]}>
              Grátis
            </Text>
          ) : (
            <Text style={styles.storeGenericText}>{deliverFee}</Text>
          )}
        </View>

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
            <View style={styles.storeBenefictsEmptyWrapper} />
          )}
        </View>
      </View>
    </View>
  );
};

export default StoreItem;
