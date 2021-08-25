import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ultraWideBannerContainer: {
    overflow: 'hidden',
    marginHorizontal: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  ultraWideBanner: {
    width: Dimensions.get('window').width,
    height: 80,
  },
});
