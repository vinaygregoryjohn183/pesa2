import React, {useEffect, useState} from 'react';
import {Keyboard, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { HomeIcon, HomeActiveIcon, InvestmentIcon, InvestmentActiveIcon, TransactionsIcon, TransactionsActiveIcon, MileStoneIcon, MileStoneActiveIcon } from '../../assets/icons';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import Dashboard from '../Dashboard/Dashboard';
import Transactions from '../Transactions/Transactions';
import Milestone from '../Milestone/Milestone';
import Investment from '../Investment/Investment';

const {Navigator, Screen} = createBottomTabNavigator();

function TabNavigator() {
  const [visible, setVisibility] = useState(true);

  useEffect(() => {
    let keyboardEventListeners: Array<any>;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisibility(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisibility(true)),
      ];
    }
    return () =>
      keyboardEventListeners &&
      keyboardEventListeners.forEach(eventListener => eventListener.remove());
  }, []);

  return (
    <Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      headerMode="none"
      // tabBarOptions={{
      //   keyboardHidesTabBar: true
      // }}
      tabBar={tabBarProps => (
        <BottomTabBar
          visible={Platform.OS === 'android' ? visible : true}
          {...tabBarProps}
        />
      )}>
      <Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => {
            // return focused ? (
            //   <HomeIcon color={color} size={20} />
            // ) : (
            //   <HomeActiveIcon color={color} size={20} />
            // );
            return null;
          },
        }}
        name="Home"
        component={Dashboard}
      />
      <Screen
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({focused, color}) => {
            // return focused ? (
            //   <TransactionsIcon color={color} size={20} />
            // ) : (
            //   <TransactionsActiveIcon color={color} size={20} />
            // );
            return null;
          },
        }}
        name="Transactions"
        component={Transactions}
      />
      <Screen
        options={{
          tabBarLabel: 'Investment',
          tabBarIcon: ({focused, color}) => {
            // return focused ? (
            //   <InvestmentIcon color={color} size={20} />
            // ) : (
            //   <InvestmentActiveIcon color={color} size={20} />
            // );
            return null;
          },
        }}
        name="Investment"
        component={Investment}
      />
      <Screen
        options={{
          tabBarLabel: 'Milestone',
          tabBarIcon: ({focused, color}) => {
            // return focused ? (
            //   <MileStoneIcon color={color} size={20} />
            // ) : (
            //   <MileStoneActiveIcon color={color} size={20} />
            // );
            return null;
          },
        }}
        name="Milestone"
        component={Milestone}
      />
    </Navigator>
  );
}

export default TabNavigator;
