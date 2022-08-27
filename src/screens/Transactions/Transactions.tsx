import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

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
  console.log('transactions');

  const onViewTransaction = () => {
    navigation.navigate('ViewTransaction');
  };

  return (
    <>
      {dummyTransactionList.map(transaction => (
        <Pressable style={styles.card} onPress={onViewTransaction}>
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
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 0,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paidToText: {
    fontSize: 15,
    lineHeight: 16,
    fontWeight: '700',
    color: 'black',
  },
  amount: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '700',
    color: '#004BE7',
  },
  date: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400',
    color: '#535353',
  },
  type: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400',
  },
});
