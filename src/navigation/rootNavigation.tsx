import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Transactions, ViewTransaction} from '../screens';
import {SignUp} from '../screens/SignUp/SignUp';

const RootNavigation = ({}) => {
  const {Screen, Navigator} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" options={{title: 'Home'}} component={Home} />
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
          options={{title: 'View Transaction'}}
          component={ViewTransaction}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
