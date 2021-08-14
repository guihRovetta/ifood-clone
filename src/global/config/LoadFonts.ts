import * as Font from 'expo-font';

export const fetchFonts = () => {
  return Font.loadAsync({
    'sulsans-bold': require('../../assets/fonts/SulSans-Bold.ttf'),
    'sulsans-bold-italic': require('../../assets/fonts/SulSans-BoldItalic.ttf'),
    'sulsans-light': require('../../assets/fonts/SulSans-Light.ttf'),
    'sulsans-medium': require('../../assets/fonts/SulSans-Medium.ttf'),
    'sulsans-regular': require('../../assets/fonts/SulSans-Regular.ttf'),
  });
};
