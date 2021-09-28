import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { colors } from '../../global/styles/colors';
import { ArrowDownIcon, QrCodeIcon } from '../../global/styles/icons';
import HorizontalTabs, { Item } from '../HorizontalTabs';
import { styles } from './styles';

type HeaderProps = {
  headerHeight: number;
  handleChangeCategory: (category: string) => void;
  category: string;
  categoryList: Item[];
  address: string;
};

const Header = ({
  headerHeight,
  category,
  handleChangeCategory,
  categoryList,
  address,
}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={[
          styles.contentContainer,
          {
            height: headerHeight / 2,
          },
        ]}
      >
        <Pressable style={styles.dropdownContainer}>
          <Text style={styles.addressText}>{address}</Text>
          <ArrowDownIcon
            style={styles.dropdownIcon}
            width={24}
            height={24}
            fill={colors?.main}
          />
        </Pressable>

        <Pressable>
          <QrCodeIcon width={25} height={25} />
        </Pressable>
      </View>

      <View style={styles.categoryContainer}>
        <HorizontalTabs
          items={categoryList}
          activeTab={category}
          handleChangeActiveTab={handleChangeCategory}
        />
      </View>
    </View>
  );
};

export default Header;
