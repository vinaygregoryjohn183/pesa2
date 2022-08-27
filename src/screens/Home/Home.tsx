import React, { useEffect, useState } from 'react';
import { Image, Keyboard, Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeImage, HomeActiveImage, InvestmentImage, InvestmentActiveImage, TransactionsImage, TransactionsActiveImage, MilestoneImage, MilestoneActiveImage } from '../../assets/images';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import Feed from '../Feed/Feed';
import Transactions from '../Transactions/Transactions';
import Milestone from '../Milestone/Milestone';
import Investment from '../Investment/Investment';

const { Navigator, Screen } = createBottomTabNavigator();

function TabNavigator() {
  const [visible, setVisibility] = useState(true);

  useEffect(() => {
    let keyboardEventListeners: Array<any>;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisibility(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisibility(true))
      ];
    }
    return () =>
      keyboardEventListeners &&
      keyboardEventListeners.forEach((eventListener) => eventListener.remove());
  }, []);

  return (
    <Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      headerMode="none"
      // tabBarOptions={{
      //   keyboardHidesTabBar: true
      // }}
      tabBar={(tabBarProps) => (
        <BottomTabBar
          visible={Platform.OS === 'android' ? visible : true}
          {...tabBarProps}
        />
      )}
    >
      <Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Image source={HomeActiveImage} />
            ) : (
              <Image source={HomeImage} />
            );
          }
        }}
        name='Home'
        component={Feed}
      />
      <Screen
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Image source={TransactionsActiveImage} />
            ) : (
              <Image source={TransactionsImage} />
            );
          }
        }}
        name='Transactions'
        component={Transactions}
      />
      <Screen
        options={{
          tabBarLabel: 'Investment',
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Image source={InvestmentActiveImage} />
            ) : (
              <Image source={InvestmentImage} />
            );
          }
        }}
        name='Investment'
        component={Investment}
      />
      <Screen
        options={{
          tabBarLabel: 'Milestone',
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Image source={MilestoneActiveImage} />
            ) : (
              <Image source={MilestoneImage} />
            );
          }
        }}
        name='Milestone'
        component={Milestone}
      />
    </Navigator>
  );
}

export default TabNavigator;
