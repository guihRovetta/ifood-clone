import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { ArrowDownIcon, QrCodeIcon } from '../../global/styles/icons';
import HorizontalTabs from '../HorizontalTabs';
import { styles } from './styles';

type HeaderProps = {
  headerHeight: number;
};

const teste = [
  { key: 'restaurants1', label: 'Restaurantes' },
  { key: 'restaurants2', label: 'Restaurantes' },
  { key: 'restaurants3', label: 'Restaurantes' },
  { key: 'restaurants4', label: 'Restaurantes' },
  { key: 'restaurants5', label: 'Restaurantes' },
  { key: 'restaurants6', label: 'Restaurantes' },
  { key: 'restaurants7', label: 'Restaurantes' },
  { key: 'restaurants8', label: 'Restaurantes' },
];

const Header = ({ headerHeight }: HeaderProps) => {
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
          <Text style={styles.addressText}>Av. Paulista, 190</Text>
          <ArrowDownIcon style={styles.dropdownIcon} width={24} height={24} />
        </Pressable>

        <Pressable>
          <QrCodeIcon width={25} height={25} />
        </Pressable>
      </View>

      <View style={styles.categoryContainer}>
        <HorizontalTabs items={teste} />
      </View>
    </View>
  );
};

export default Header;
