import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  storeBenefictsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
  },
  storeDefaultBenefictsWrapper: {
    backgroundColor: colors?.lightBlue,
  },
  storeRecurrenceBenefictsWrapper: {
    backgroundColor: colors?.lightYellow,
  },
  storeBenefictsText: {
    fontFamily: fonts?.font?.medium,
    fontSize: fonts?.size?.xsmall,
    marginLeft: 4,
  },
  storeDefaultBenefictsText: {
    color: colors?.blue,
  },
  storeRecurrenceBenefictsText: {
    color: colors?.yellow,
  },
  storeBenefictsEmptyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    height: 4,
  },
});
