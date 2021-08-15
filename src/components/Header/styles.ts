import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
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
    zIndex: 1000,
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
