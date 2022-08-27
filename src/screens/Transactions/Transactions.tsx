import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

type TransactionListProps = {
  paidTo: string;
  amount: number;
  // change to Date
  date: string;
  type: 'SMS' | 'MANUAL';
};

const dummyTransactionList: TransactionListProps[] = [
  {
    paidTo: 'Customer 1',
    amount: 1000,
    date: '10/11/2022',
    type: 'SMS',
  },
  {
    paidTo: 'Customer 2',
    amount: 200,
    date: '08/08/2022',
    type: 'MANUAL',
  },
  {
    paidTo: 'Customer 3',
    amount: 5500,
    date: '15/05/2022',
    type: 'SMS',
  },
];

const Transactions = ({navigation}: {navigation: any}) => {

  const onViewTransaction = (type: any) => {
    type === 'SMS' ?
    navigation.navigate('ViewTransaction') :
    navigation.navigate('AddTransactions')
    ;
  };

  return (
     <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['rgba(255, 255, 255, 0.8)', '#8082ED']}>
       <View style={{ height: '100%' }} >
      {dummyTransactionList.map(transaction => (
        <Pressable style={styles.card} onPress={() => onViewTransaction(transaction.type)}>
          <View style={styles.detail}>
            <Text style={styles.paidToText}>{transaction.paidTo}</Text>
            <Text style={styles.amount}>{transaction.amount}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.date}>{transaction.date}</Text>
            <Text
              style={[
                styles.type,
                {color: transaction.type === 'SMS' ? '#9A5C00' : '#600278'},
              ]}>
              {transaction.type}
            </Text>
          </View>
        </Pressable>
      ))}
      </View>
      </LinearGradient>
  );
};

export default Transactions;
