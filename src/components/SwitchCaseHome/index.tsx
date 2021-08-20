import React from 'react';
import { Text } from 'react-native';

import { Item } from '../HorizontalTabs';

type SwitchCaseHomeProps = {
  category: string;
  categoryList: Item[];
};

const SwitchCaseHome = ({ category, categoryList }: SwitchCaseHomeProps) => {
  switch (category) {
    case categoryList[0]?.key:
      return <Text>{categoryList[0]?.label}</Text>;
    case categoryList[1]?.key:
      return <Text>{categoryList[1]?.label}</Text>;
    case categoryList[2]?.key:
      return <Text>{categoryList[2]?.label}</Text>;
    case categoryList[3]?.key:
      return <Text>{categoryList[3]?.label}</Text>;
    case categoryList[4]?.key:
      return <Text>{categoryList[4]?.label}</Text>;
    default:
      return <Text>{categoryList[5]?.label}</Text>;
  }
};

export default SwitchCaseHome;
