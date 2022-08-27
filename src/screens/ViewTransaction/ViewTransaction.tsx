import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

const ViewTransaction = ({navigation}: {navigation: any}) => {
  const onPressSplit = () => {
    navigation.navigate('AddParticipants');
  }
  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    colors={['rgba(255, 255, 255, 0.8)', '#8082ED']}>

      <View style={{ height: '100%'}}>
        <Text style={styles.transactionText}>View Transaction</Text>
        <View style={styles.transactionDetails}>
          <View style={{ marginLeft: 15 }}>
          <Text style={styles.title}>
            Paid to
          </Text>
          <Text style={styles.subText}>
           SWIGGY
          </Text>
          <Text style={styles.title}>
          Date
          </Text>
          <Text style={styles.subText}>
          24 August 2022 
          </Text>
          <Text style={styles.title}>
          Amount
          </Text>
          <Text style={styles.subText}>
          ₹ 9,000
          </Text>
          <Text style={styles.title}>
          Bank
          </Text>
          <Text style={styles.subText}>
           HDFC
          </Text>
          <Text style={styles.title}>
          Transaction id
          </Text>
          <Text style={styles.subText}>
          233112237887
          </Text>
          </View>
          <TouchableOpacity style={styles.touchOpacity} onPress={onPressSplit}>
            <Text style={styles.splitText}>
            Split with Friends
            </Text>
          </TouchableOpacity>
          <View style={{ width: '30%', marginLeft: 20, marginBottom: 20 }}>
          <Button  title="Save" color="#6264FF" />
          </View>
        </View>
      </View>
      </LinearGradient>
  );
};

export default ViewTransaction;
