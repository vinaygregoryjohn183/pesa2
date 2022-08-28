import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ExpensePieChart from './PieChart';
import styles from './styles';

const Dashboard = ({navigation}: {navigation: any}) => {
  const [res, setResponse] = useState(null);
  const getMilestones = async () => {
    const response = await fetch(
      'https://211b-103-142-31-94.in.ngrok.io/api/v1/user/summary?userId=d89e855f-11a9-454e-ac83-51b28cb820be&milestoneId=037bcbb5-0015-4c62-a205-29013b74c006',
      {method: 'GET'},
    );
    return response.json();
  };
  useEffect(() => {
    console.log(
      getMilestones().then(data => {
        console.log('data', data), setResponse(data);
      }),
    );
  }, []);
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
              <Text style={styles.budgetText}>₹ {res?.totalSpend || 0}</Text>
            </View>
          </View>
          <View style={styles.pieChartContainer}>
            <ExpensePieChart response={res} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
export default Dashboard;
