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
    fontSize: fonts?.size?.large,
    color: colors?.lightGray,
  },
  tabTextActive: {
    color: colors?.main,
  },
  tabSeparator: {
    marginLeft: 16,
  },
  horizontalTabsContainer: {
    paddingHorizontal: 12,
  },
});
