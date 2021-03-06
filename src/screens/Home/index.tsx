import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import Header from '../../components/Header';
import RestaurantFilters from '../../components/RestaurantFilters';
import SwitchCaseHome from '../../components/SwitchCaseHome';
import { categoryList } from '../../data/categoryList';
import { colors } from '../../global/styles/colors';
import { styles } from './styles';

const HEADER_HEIGHT = 48 * 2;

const Home = () => {
  const [category, setCategory] = useState(categoryList[0]?.key);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, HEADER_HEIGHT);

  const translateY = Animated.interpolateNode(scrollYClamped, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <StatusBar style="dark" />
        <Header
          headerHeight={HEADER_HEIGHT}
          categoryList={categoryList}
          category={category}
          handleChangeCategory={handleChangeCategory}
          address="Av. São João, 2200"
        />
      </Animated.View>

      {category === categoryList[0]?.key && (
        <Animated.View
          style={[
            styles.header,
            {
              marginTop: HEADER_HEIGHT - 10,
              paddingVertical: 15,
              backgroundColor: colors?.white,
              transform: [{ translateY }],
            },
          ]}
        >
          <RestaurantFilters />
        </Animated.View>
      )}

      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          marginTop:
            category === categoryList[0]?.key
              ? HEADER_HEIGHT + 48
              : HEADER_HEIGHT,
          paddingBottom:
            category === categoryList[0]?.key
              ? HEADER_HEIGHT + 48
              : HEADER_HEIGHT,
        }}
        onScroll={handleScroll}
      >
        <SwitchCaseHome category={category} categoryList={categoryList} />
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
