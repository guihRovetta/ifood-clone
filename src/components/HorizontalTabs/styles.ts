import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  tabActive: {
    borderBottomColor: colors?.main,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  tabText: {
    fontFamily: 'sulsans-medium',
    color: colors?.lightGray,
  },
  tabTextActive: {
    color: colors?.main,
  },
});
