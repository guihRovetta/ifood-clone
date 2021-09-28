import React from 'react';
import { Text } from 'react-native';

import Drinks from '../Drinks';
import Drugstores from '../Drugstores';
import { Item } from '../HorizontalTabs';
import Markets from '../Markets';
import Pets from '../Pets';
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
      return <Drugstores />;
    case categoryList[4]?.key:
      return <Pets />;
    default:
      return <Text>{categoryList[5]?.label}</Text>;
  }
};

export default SwitchCaseHome;
