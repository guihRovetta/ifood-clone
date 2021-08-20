import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    zIndex: 2,
    backgroundColor: colors?.white,
    borderBottomColor: colors?.lighterGray,
    borderBottomWidth: 1,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.large,
    color: colors?.darkGray,
  },
  dropdownIcon: {
    marginLeft: 4,
  },
  categoryContainer: {
    marginLeft: 12,
    marginTop: 8,
  },
});
