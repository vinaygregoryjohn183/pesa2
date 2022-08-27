import React from 'react';
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation }: { navigation: any }) => {
    console.log('home');

    const onPress = () => {
        console.log('navigating');
    };

    return (
        <View>
          <TouchableOpacity style={{ backgroundColor: 'green', padding: 10 }} onPress={() => {
              console.log('navigating');
              navigation.navigate('Transactions');
              }}>
            <Text>Navigate to Transactions</Text>
          </TouchableOpacity>
        </View>
    );
};

export default Home;
