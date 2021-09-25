import React from 'react';
import { Text } from 'react-native';

import Drinks from '../Drinks';
import { Item } from '../HorizontalTabs';
import Markets from '../Markets';
import Restaurants from '../Restaurants';

type SwitchCaseHomeProps = {
  category: string;
  categoryList: Item[];
};

const SwitchCaseHome = ({ category, categoryList }: SwitchCaseHomeProps) => {
  switch (category) {
    case categoryList[0]?.key:
      return <Restaurants />;
    case categoryList[1]?.key:
      return <Markets />;
    case categoryList[2]?.key:
      return <Drinks />;
    case categoryList[3]?.key:
      return <Text>{categoryList[3]?.label}</Text>;
    case categoryList[4]?.key:
      return <Text>{categoryList[4]?.label}</Text>;
    default:
      return <Text>{categoryList[5]?.label}</Text>;
  }
};

export default SwitchCaseHome;
