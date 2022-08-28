import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'


const AddParticipants = () => {
  const [participants, setParticipants] = useState('');
  const handleParticipantsChange = (text: any) =>{
    setParticipants(text)
        }
  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    colors={['rgba(255, 255, 255, 0.8)', '#8082ED']}>

      <View style={{ height: '100%'}}>
      <Text style={styles.titleText}>
       Add Participants
      </Text>
      <View style={styles.transactionDetails}>
          <View style={{ marginLeft: 15 }}>
          <Text style={styles.title}>
            Amount
          </Text>
          <Text style={styles.subText}>
          ₹ 9,000
          </Text>
          <Text style={styles.title}>
          Participants
          </Text>
          <TextInput style={styles.textInput} placeholder='Enter Category' maxLength={30} onChangeText={(newText) => handleParticipantsChange}/>
          </View>
          <View style={{ width: '30%', marginLeft: 20, marginBottom: 20, marginTop: 25 }}>
          <Button  title="Next" color="#6264FF" />
          </View>
        </View>
      </View>
      </LinearGradient>
  );
};

export default AddParticipants;
