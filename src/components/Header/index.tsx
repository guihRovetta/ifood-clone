import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { ArrowDownIcon, QrCodeIcon } from '../../global/styles/icons';
import HorizontalTabs, { Item } from '../HorizontalTabs';
import { styles } from './styles';

type HeaderProps = {
  headerHeight: number;
  handleChangeCategory: (category: string) => void;
  category: string;
  categoryList: Item[];
};

const Header = ({
  headerHeight,
  category,
  handleChangeCategory,
  categoryList,
}: HeaderProps) => {
  const address = 'Av. Paulista, 190';

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
          <ArrowDownIcon style={styles.dropdownIcon} width={24} height={24} />
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
