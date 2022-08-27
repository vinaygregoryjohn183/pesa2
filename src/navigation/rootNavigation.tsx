import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Transactions, ViewTransaction, AddParticipants, AddTransactions} from '../screens';
import {SignUp} from '../screens/SignUp/SignUp';

const RootNavigation = ({}) => {
  const {Screen, Navigator} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" options={{title: 'Home', header: () => null}} component={Home} />
        <Screen
          name="Transactions"
          options={{title: 'Transactions'}}
          component={Transactions}
        />
        <Screen
          name="SignUp"
          options={{title: 'SingUp', header: () => null}}
          component={SignUp}
        />
        <Screen
          name="ViewTransaction"
          options={{title: 'View Transaction', header: () => null}}
          component={ViewTransaction}
        />
          <Screen
          name="AddParticipants"
          options={{title: 'Add Participants', header: () => null}}
          component={AddParticipants}
        />
          <Screen
          name="AddTransactions"
          options={{title: 'Add Transactions', header: () => null}}
          component={AddTransactions}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
