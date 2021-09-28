import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  horizontalStoreListHeaderWrapper: {
    marginBottom: 12,
    marginRight: 12,
  },
  horizontalStoreListFirstLineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalStoreListShowMoreButtonText: {
    fontFamily: fonts?.font?.regular,
    fontSize: fonts?.size?.small,
    color: colors?.main,
  },
  horizontalStoreListTitle: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.large,
    color: colors?.mediumGray,
    marginBottom: 4,
  },
  horizontalStoreListSubtitle: {
    fontFamily: fonts?.font?.light,
    fontSize: fonts?.size?.small,
    color: colors?.gray,
  },
  horizontalStoreListContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  horizontalStoreListStoreItemContainer: {
    width: 300,
    marginRight: 15,
  },
});
