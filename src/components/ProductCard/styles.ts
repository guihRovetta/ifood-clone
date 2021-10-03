import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  productContainer: {
    width: 150,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors?.lightWhite,
    overflow: 'hidden',
  },
  productHeaderContainer: {
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 88,
    justifyContent: 'flex-start',
  },
  productStoreContainer: {
    overflow: 'hidden',
    borderRadius: 24,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: colors?.lightWhite,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productStoreImage: {
    width: 24,
    height: 24,
  },
  productContentContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: colors?.lightWhite,
  },
  productText: {
    fontFamily: fonts?.font?.regular,
    fontSize: fonts?.size?.small,
    color: colors?.darkGray,
    marginRight: 4,
    maxWidth: '90%',
  },
  productName: {
    minHeight: 28,
  },
  productPrice: {
    marginTop: 8,
  },
  productSeparator: {
    marginHorizontal: 6,
    height: 3,
    width: 3,
    borderRadius: 3,
    backgroundColor: colors?.lightGray,
  },
  productGenericText: {
    fontFamily: fonts?.font?.light,
    fontSize: fonts?.size?.xsmall,
    color: colors?.lightGray,
  },
  productFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  productFreeDelivery: {
    color: colors?.green,
  },
});
