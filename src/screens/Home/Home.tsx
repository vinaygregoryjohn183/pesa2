import React, {useEffect, useState} from 'react';
import {Image, Keyboard, PermissionsAndroid, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SmsAndroid from 'react-native-get-sms-android';

import {
  HomeImage,
  HomeActiveImage,
  InvestmentImage,
  InvestmentActiveImage,
  TransactionsImage,
  TransactionsActiveImage,
  MilestoneImage,
  MilestoneActiveImage,
} from '../../assets/images';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import Dashboard from '../Dashboard/Dashboard';
import Transactions from '../Transactions/Transactions';
import Milestone from '../Milestone/Milestone';
import Investment from '../Investment/Investment';

const {Navigator, Screen} = createBottomTabNavigator();

function TabNavigator() {
  const [visible, setVisibility] = useState(true);

  useEffect(() => {
    requestReadSmsPermission();
  });
  const requestReadSmsPermission = async () => {
    try {
      var granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'Auto Verification OTP',
          message: 'need access to read sms, to verify OTP',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('sms read permissions granted', granted);
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          {
            title: 'Receive SMS',
            message: 'Need access to receive sms, to verify OTP',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('RECEIVE_SMS permissions granted', granted);
        } else {
          console.log('RECEIVE_SMS permissions denied');
        }
      } else {
        console.log('sms read permissions denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      initialRouteName="Feed"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
      }}
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
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={HomeActiveImage} />
            ) : (
              <Image source={HomeImage} />
            );
          },
        }}
        name="Home"
        component={Dashboard}
      />
      <Screen
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={TransactionsActiveImage} />
            ) : (
              <Image source={TransactionsImage} />
            );
          },
        }}
        name="Transactions"
        component={Transactions}
      />
      <Screen
        options={{
          tabBarLabel: 'Goals',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={InvestmentActiveImage} />
            ) : (
              <Image source={InvestmentImage} />
            );
          },
        }}
        name="Goals"
        component={Investment}
      />
      <Screen
        options={{
          tabBarLabel: 'Milestone',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={MilestoneActiveImage} />
            ) : (
              <Image source={MilestoneImage} />
            );
          },
        }}
        name="Milestone"
        component={Milestone}
      />
    </Navigator>
  );
}

export default TabNavigator;
