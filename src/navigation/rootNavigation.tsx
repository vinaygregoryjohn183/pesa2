import React, {FunctionComponent, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {Home, Transactions, ViewTransaction, AddParticipants, AddTransactions} from '../screens';

const RootNavigation = ({}) => {
  const {Screen, Navigator} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" headerMode="none">
        <Screen name="Home" options={{title: 'Home'}} component={Home} />
        <Screen
          name="Transactions"
          options={{title: 'Transactions'}}
          component={Transactions}
        />
        <Screen
          name="ViewTransaction"
          options={{title: 'View Transaction'}}
          component={ViewTransaction}
        />
          <Screen
          name="AddParticipants"
          options={{title: 'Add Participants'}}
          component={AddParticipants}
        />
          <Screen
          name="AddTransactions"
          options={{title: 'Add Transactions'}}
          component={AddTransactions}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
