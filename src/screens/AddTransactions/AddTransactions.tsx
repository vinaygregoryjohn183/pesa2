import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'


const AddTransactions = ({navigation}: {navigation: any}) => {
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
       Add Transactions
      </Text>
      <View style={styles.transactionDetails}>
          <View style={{ marginLeft: 15 }}>
               <Text style={styles.title}>
            Category
          </Text>
               <TextInput value={category} style={styles.textInput} placeholder='Enter Category' maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
               <Text style={styles.title}>
            Date
          </Text>
               <TextInput style={styles.textInput} placeholder='Enter Date'  maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
               <Text style={styles.title}>
            Amount
          </Text>
               <TextInput style={styles.textInput} placeholder='Enter Amount'  maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
               <Text style={styles.title}>
            Note
          </Text>
               <TextInput style={styles.textInput} placeholder='Enter Notes'  maxLength={30} onChangeText={(newText) => handleCategoryChange}/>
          </View>
          <TouchableOpacity style={styles.touchOpacity} onPress={onPressSplit}>
            <Text style={styles.splitText}>
            Split with Friends
            </Text>
          </TouchableOpacity>
          <View style={{ width: '30%', marginLeft: 20, marginBottom: 20, marginTop: 25 }}>
          <Button  title="Save" color="#6264FF" />
          </View>
        </View>
      </View>
      </LinearGradient>
  );
};

export default  AddTransactions;
