import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { colors } from '../global/styles/colors';
import {
  HomeFilledIcon,
  HomeOutlinedIcon,
  OrdersFilledIcon,
  OrdersOutlinedIcon,
  ProfileFilledIcon,
  ProfileOutlinedIcon,
  SearchFilledIcon,
  SearchOutlinedIcon,
} from '../global/styles/icons';
import Home from '../screens/Home';
import NotFound from '../screens/NotFound';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'sulsans-regular' },
        tabBarIconStyle: { width: 18, height: 18 },
        tabBarActiveTintColor: colors?.darkGray,
        tabBarLabelStyle: { fontFamily: 'sulsans-regular' },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeFilledIcon fill={color} />
            ) : (
              <HomeOutlinedIcon fill={color} />
            ),
          title: 'Início',
        }}
      />

      <AppTab.Screen
        name="Search"
        component={NotFound}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <SearchFilledIcon fill={color} />
            ) : (
              <SearchOutlinedIcon fill={color} />
            ),
          title: 'Buscar',
        }}
      />

      <AppTab.Screen
        name="Orders"
        component={NotFound}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <OrdersFilledIcon fill={color} />
            ) : (
              <OrdersOutlinedIcon fill={color} />
            ),
          title: 'Pedidos',
        }}
      />

      <AppTab.Screen
        name="Profile"
        component={NotFound}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <ProfileFilledIcon fill={color} />
            ) : (
              <ProfileOutlinedIcon fill={color} />
            ),
          title: 'Perfil',
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
