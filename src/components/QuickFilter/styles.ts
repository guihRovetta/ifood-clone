import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors?.lighterGray,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    maxHeight: 32,
    height: '100%',
  },
  filterContainerActive: {
    backgroundColor: colors?.lightMain,
    borderColor: colors?.lightMain,
  },
  filterLabel: {
    color: colors?.lightGray,
    fontFamily: fonts?.font?.medium,
    paddingHorizontal: 4,
  },
  filterLabelActive: {
    color: colors?.main,
  },
});
