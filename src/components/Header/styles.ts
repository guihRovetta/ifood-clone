import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    paddingHorizontal: 12,
    backgroundColor: colors?.white,
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
});
