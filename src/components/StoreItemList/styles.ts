import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  storeListItemTitle: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.large,
    color: colors?.mediumGray,
    marginBottom: 16,
  },
  storeItemListSeparatorComponent: {
    marginBottom: 24,
  },
});
