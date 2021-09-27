import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  storeListHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 12,
    marginBottom: 16,
  },
  storeListTitle: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.large,
    color: colors?.mediumGray,
  },
  storeListShowMoreButtonText: {
    fontFamily: fonts?.font?.regular,
    fontSize: fonts?.size?.small,
    color: colors?.main,
  },
  storeListSeparatorComponent: {
    marginLeft: 16,
  },
});
