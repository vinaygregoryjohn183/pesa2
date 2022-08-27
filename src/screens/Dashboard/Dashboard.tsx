import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ExpensePieChart from './PieChart';
import styles from './styles';

const Dashboard = ({navigation}: {navigation: any}) => {
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
