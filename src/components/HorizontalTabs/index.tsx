import React from 'react';
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

export type Item = {
  key: string;
  label: string;
};

type HorizontalTabsProps = {
  items: Item[];
  handleChangeActiveTab: (key: string) => void;
  activeTab: string;
};

const HorizontalTabs = ({
  items,
  handleChangeActiveTab,
  activeTab,
}: HorizontalTabsProps) => {
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
      ItemSeparatorComponent={() => <View style={styles.tabSeparator} />}
      contentContainerStyle={styles.horizontalTabsContainer}
    />
  );
};

export default HorizontalTabs;
