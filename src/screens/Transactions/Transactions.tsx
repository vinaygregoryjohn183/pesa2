import React, { useEffect, useState } from 'react';
import {Pressable, Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AddImage } from '../../assets/images';

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
  const [transactions, setTransactions] = useState<any>({});
  const onViewTransaction = (id: any) => {
    navigation.navigate('ViewTransaction', {transactionId: id });
    ;
  };

  const onPressAdd = () => {
    navigation.navigate('AddTransactions');
    ;
  };

  const getCurrentMilestone = async () => {
    console.log('fetching.....');
    const currMile = await fetch('https://211b-103-142-31-94.in.ngrok.io/api/v1/milestone/current-milestone/d89e855f-11a9-454e-ac83-51b28cb820be', { method: 'GET' });
    return currMile.json();
  };

  const getTransactions = async (milestoneId: string) => {
    console.log('fetching.....');
    const currMile = await fetch(`https://211b-103-142-31-94.in.ngrok.io/api/v1/transaction/milestone/${milestoneId}`, { method: 'GET' });
    return currMile.json();
  };

  useEffect(() => {
    getCurrentMilestone().then(data => {
        getTransactions(data.id).then((resp) => {
          setTransactions(resp);
        });
      });
  }, []);

  return (
     <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['rgba(255, 255, 255, 0.8)', '#8082ED']}>
       <View style={{ height: '100%' }}>
         <View style={{ marginTop: 20, marginLeft: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
         <Text style={styles.title}>Transactions</Text>
         <Pressable style={{ marginRight: 15, backgroundColor: '#ffffff', borderRadius: 10, padding: 3}} onPress={onPressAdd}>
         <Image source={AddImage} />
         </Pressable>
         </View>
      {transactions && transactions.length ? transactions?.map((transaction, index) => {
        const id = transaction.id
        return(
        <Pressable style={styles.card} onPress={() => onViewTransaction(id)} key={index}>
          <View style={styles.detail}>
            <Text style={styles.paidToText}>{transaction?.title}</Text>
            <Text style={styles.amount}>{transaction?.amount}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.date}>{new Date(transaction?.createdAt)?.toDateString()}</Text>
            {/* <Text
              style={[
                styles.type,
                {color: transaction.type === 'SMS' ? '#9A5C00' : '#600278'},
              ]}>
              {transaction.type}
            </Text> */}
          </View>
        </Pressable>
      )}) : null}
      </View>
      </LinearGradient>
  );
};

export default Transactions;
