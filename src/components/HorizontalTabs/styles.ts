import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  tabActive: {
    borderBottomColor: colors?.main,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  tabText: {
    fontFamily: fonts?.font?.medium,
    color: colors?.lightGray,
  },
  tabTextActive: {
    color: colors?.main,
  },
});
