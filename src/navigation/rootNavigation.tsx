import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Transactions from '../screens/Transactions/Transactions';
import {SignUp} from '../screens/SignUp/SignUp';

const RootNavigation = ({}) => {
  const {Screen, Navigator} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SignUp">
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
      </Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
