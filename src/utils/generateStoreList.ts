import { ImageSourcePropType } from 'react-native';

export const generateStoreList = (
  source: ImageSourcePropType,
  label: string
) => {
  return { source, label };
};
