import React, { useState } from 'react';
import { Pressable, FlatList, Text, View } from 'react-native';

import { styles } from './styles';

type TabProps = {
  item: Item;
  handlePress: (key: string) => void;
  activeTab: string;
};

const Tab = ({ item, handlePress, activeTab }: TabProps) => {
  return (
    <Pressable onPress={() => handlePress(item?.key)}>
      <View style={[activeTab === item?.key && styles.tabActive]}>
        <Text
          style={[
            styles.tabText,
            activeTab === item?.key && styles.tabTextActive,
          ]}
        >
          {item?.label}
        </Text>
      </View>
    </Pressable>
  );
};

type Item = {
  key: string;
  label: string;
};

type HorizontalTabsProps = {
  items: Item[];
};

const HorizontalTabs = ({ items }: HorizontalTabsProps) => {
  const [activeTab, setActiveTab] = useState('');

  const handleChangeActiveTab = (newActiveTab: string) => {
    setActiveTab(newActiveTab);
  };

  return (
    <FlatList
      horizontal
      data={items}
      renderItem={({ item }) => (
        <Tab
          item={item}
          handlePress={handleChangeActiveTab}
          activeTab={activeTab}
        />
      )}
      keyExtractor={(item) => item?.key}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginLeft: 16 }} />}
    />
  );
};

export default HorizontalTabs;
