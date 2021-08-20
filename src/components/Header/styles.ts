import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    zIndex: 2,
    backgroundColor: colors?.white,
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
    fontFamily: 'sulsans-medium',
    color: colors?.darkGray,
  },
  dropdownIcon: {
    marginLeft: 4,
  },
  categoryContainer: {
    marginLeft: 12,
  },
});
