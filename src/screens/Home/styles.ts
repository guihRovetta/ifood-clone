import { StyleSheet } from 'react-native';

import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
});
