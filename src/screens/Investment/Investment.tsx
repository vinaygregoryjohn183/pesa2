import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


const Investment = ({navigation}: {navigation: any}) => {
    const [category, setCategory] = useState('');
    const handleCategoryChange = (text: any) =>{
setCategory(text)
    }
    const onPressSplit = () => {
        navigation.navigate('AddParticipants');
      }

    return (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['rgba(255, 255, 255, 0.8)', '#8082ED']}>
         <View style={{ height: '100%'}}>
      <Text style={styles.titleText}>
      Set Goal
      </Text>
      <View style={styles.transactionDetails}>
          <View style={{ marginLeft: 15 }}>
               <Text style={styles.title}>
            Amount
          </Text>
               <TextInput style={styles.textInput} placeholder='Enter Amount' maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
               <Text style={styles.title}>
            Time Period
          </Text>
               <TextInput style={styles.textInput} placeholder='Enter Period'  maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
               <Text style={styles.title}>
            Note
          </Text>
               <TextInput style={styles.textInput} placeholder='Enter Notes'  maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
          </View>
          <TouchableOpacity style={styles.touchOpacity} onPress={onPressSplit}>
            <Text style={styles.splitText}>
             Calculate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
        </LinearGradient>
    );
};

export default Investment;
