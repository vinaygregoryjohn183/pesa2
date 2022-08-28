import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SmsAndroid from 'react-native-get-sms-android';

import ExpensePieChart from './PieChart';
import styles from './styles';

const Dashboard = ({navigation}: {navigation: any}) => {
  let msgIds = new Set();
  var filter = {
    box: 'inbox',
    bodyRegex: '(.*)debited(.*)', // content regex to match
    // indexFrom: 0, // start from index 0
    maxCount: 1, // count of SMS to return each time
  };

  setInterval(
    () =>
      SmsAndroid.list(
        JSON.stringify(filter),
        fail => {
          console.log('Failed with this error: ' + fail);
        },
        (count, smsList) => {
          var arr = JSON.parse(smsList);
          if (!msgIds.has(arr[0]._id)) {
            msgIds.add(arr[0]._id);
            console.log('parse');
            console.log(msgIds);
          }
        },
      ),
    2000,
  );

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['rgba(255, 255, 255, 0.8)', '#8082ED']}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Hi Akash</Text>
        <View style={styles.budgetAndPieChart}>
          <View style={styles.card}>
            <View style={styles.budgetCard}>
              <Text style={styles.cardText}>This month’s budget</Text>
              <Text style={styles.budgetText}>₹ 22000.00</Text>
            </View>
          </View>
          <View style={styles.pieChartContainer}>
            <ExpensePieChart />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
export default Dashboard;
