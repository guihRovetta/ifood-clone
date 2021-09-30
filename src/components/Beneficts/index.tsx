import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../global/styles/colors';
import {
  DeliveryFeeIcon,
  CouponIcon,
  SquareStarIcon,
} from '../../global/styles/icons';
import { StoreInfoType } from '../StoreItem';
import { styles } from './styles';

type BenefictsProps = Pick<
  StoreInfoType,
  'coupon' | 'freeDeliveryAvailable' | 'recurrence'
>;

const Beneficts = ({
  coupon,
  freeDeliveryAvailable,
  recurrence,
}: BenefictsProps) => {
  if (coupon) {
    return (
      <View
        style={[
          styles.storeBenefictsWrapper,
          styles.storeDefaultBenefictsWrapper,
        ]}
      >
        <CouponIcon width={10} height={10} fill={colors?.blue} />
        <Text
          style={[styles.storeBenefictsText, styles.storeDefaultBenefictsText]}
        >{`Cupom de ${coupon} disponível`}</Text>
      </View>
    );
  }

  if (freeDeliveryAvailable) {
    return (
      <View
        style={[
          styles.storeBenefictsWrapper,
          styles.storeDefaultBenefictsWrapper,
        ]}
      >
        <DeliveryFeeIcon width={10} height={10} fill={colors?.blue} />
        <Text
          style={[styles.storeBenefictsText, styles.storeDefaultBenefictsText]}
        >
          Entrega grátis disponível
        </Text>
      </View>
    );
  }

  if (recurrence?.numberOfTimes && recurrence?.discountValue) {
    const { numberOfTimes, discountValue } = recurrence;

    return (
      <View
        style={[
          styles.storeBenefictsWrapper,
          styles.storeRecurrenceBenefictsWrapper,
        ]}
      >
        <SquareStarIcon width={10} height={10} fill={colors?.yellow} />
        <Text
          style={[
            styles.storeBenefictsText,
            styles.storeRecurrenceBenefictsText,
          ]}
        >
          {`Peça ${numberOfTimes} vezes, ganhe ${discountValue}`}
        </Text>
      </View>
    );
  }

  return <View style={styles.storeBenefictsEmptyWrapper} />;
};

export default Beneficts;
