import React, { FunctionComponent, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Transactions from '../screens/Transactions/Transactions';

const RootNavigation = ({
}) => {
    const { Screen, Navigator } = createStackNavigator();
    return (
      <NavigationContainer >
        <Navigator initialRouteName="Home" headerMode="none">
          <Screen name="Home" options={{ title: 'Home' }} component={Home} />
          <Screen name="Transactions" options={{ title: 'Transactions' }} component={Transactions} />
        </Navigator>
      </NavigationContainer>
    )
};
export default RootNavigation;