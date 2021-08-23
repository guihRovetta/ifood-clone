import { ImageSourcePropType } from 'react-native';

export const generateItemImageList = (
  uri: ImageSourcePropType,
  label: string
) => {
  return { uri, label };
};
