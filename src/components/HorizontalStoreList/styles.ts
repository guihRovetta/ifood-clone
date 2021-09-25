import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
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
    marginBottom: 12,
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
