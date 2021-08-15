import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { ArrowDownIcon, QrCodeIcon } from '../../global/styles/icons';
import { styles } from './styles';

type HeaderProps = {
  headerHeight: number;
};

const Header = ({ headerHeight }: HeaderProps) => {
  return (
    <>
      <View
        style={[
          styles?.contentContainer,
          {
            height: headerHeight / 2,
          },
        ]}
      >
        <Pressable style={styles?.dropdownContainer}>
          <Text style={styles?.addressText}>Av. Paulista, 190</Text>
          <ArrowDownIcon style={styles?.dropdownIcon} width={24} />
        </Pressable>

        <Pressable>
          <QrCodeIcon width={25} />
        </Pressable>
      </View>

      <View
        style={[
          styles?.contentContainer,
          {
            height: headerHeight / 2,
          },
        ]}
      >
        <Pressable style={styles?.dropdownContainer}>
          <Text style={styles?.addressText}>Av. Paulista, 190</Text>
          <ArrowDownIcon style={styles?.dropdownIcon} width={24} />
        </Pressable>

        <QrCodeIcon width={25} />
      </View>
    </>
  );
};

export default Header;
