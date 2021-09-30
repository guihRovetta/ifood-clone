import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  storeImageContainer: {
    borderRadius: 56,
    borderWidth: 1,
    borderColor: colors?.lightWhite,
    overflow: 'hidden',
  },
  storeImage: {
    width: 56,
    height: 56,
  },
  storeInfoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  storeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  storeHeaderNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  storeName: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.medium,
    color: colors?.darkGray,
    marginRight: 4,
    maxWidth: '90%',
  },
  storeContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeRating: {
    fontFamily: fonts?.font?.bold,
    fontSize: fonts?.size?.small,
    color: colors?.yellow,
    marginLeft: 2,
  },
  storeSeparator: {
    marginHorizontal: 6,
    height: 3,
    width: 3,
    borderRadius: 3,
    backgroundColor: colors?.lightGray,
  },
  storeGenericText: {
    fontFamily: fonts?.font?.light,
    fontSize: fonts?.size?.small,
    color: colors?.lightGray,
  },
  storeFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  storeFreeDelivery: {
    color: colors?.green,
  },
  storeBenefictsContainer: {
    marginTop: 8,
    alignItems: 'baseline',
  },
  storeBenefictsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    backgroundColor: colors?.lightBlue,
  },
  storeBenefictsText: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.xsmall,
    color: colors?.blue,
    marginLeft: 4,
  },
  storeBenefictsEmptyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    height: 4,
  },
});
