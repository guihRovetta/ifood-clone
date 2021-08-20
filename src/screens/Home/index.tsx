import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import Header from '../../components/Header';
import HomeFilters from '../../components/HomeFilters';
import SwitchCaseHome from '../../components/SwitchCaseHome';
import { categoryList } from '../../data/categoryList';
import { styles } from './styles';

const HEADER_HEIGHT = 48 * 2;
const data = [...Array(70).keys()];

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
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.header,
          { marginTop: HEADER_HEIGHT, transform: [{ translateY }] },
        ]}
      >
        <HomeFilters />
      </Animated.View>

      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          marginTop: HEADER_HEIGHT + 48,
        }}
        onScroll={handleScroll}
      >
        <SwitchCaseHome category={category} categoryList={categoryList} />
        {data?.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
