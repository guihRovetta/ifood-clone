import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  productCardListHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 12,
    marginBottom: 16,
  },
  productCardListTitle: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.large,
    color: colors?.mediumGray,
  },
  storeListShowMoreButtonText: {
    fontFamily: fonts?.font?.regular,
    fontSize: fonts?.size?.small,
    color: colors?.main,
  },
  productCardListSeparatorComponent: {
    marginRight: 8,
  },
});
