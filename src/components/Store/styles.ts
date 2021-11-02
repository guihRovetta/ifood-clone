import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  storeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 84,
    width: '100%',
  },
  storeImageContainer: {
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors?.lightWhite,
    overflow: 'hidden',
  },
  storeImage: {
    width: 60,
    height: 60,
    backgroundColor: colors?.lighterGray,
  },
  storeLabel: {
    fontFamily: fonts?.font?.light,
    fontSize: fonts?.size?.small,
    color: colors?.mediumGray,
    marginTop: 8,
    textAlign: 'center',
  },
});
