import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  storeContainer: {
    alignItems: 'flex-start',
    maxWidth: 175,
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors?.lightWhite,
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
    backgroundColor: colors?.lighterGray,
  },
  storeName: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.medium,
    color: colors?.darkGray,
    marginVertical: 8,
  },
  storeGenericText: {
    fontFamily: fonts?.font?.light,
    fontSize: fonts?.size?.small,
    color: colors?.lightGray,
  },
});
