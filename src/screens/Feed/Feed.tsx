import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Feed = ({ navigation }: { navigation: any }) => {
    return (
        <View>
          <TouchableOpacity style={{ backgroundColor: 'green', padding: 10 }} onPress={() => {
              navigation.navigate('Transactions');
              }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
    );
};
export default Feed;