import React from 'react';
import {Button, Pressable, Text, TouchableOpacity, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

import styles from './styles';
const ExpensePieChart = () => {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#6398E9', '#C35BA0', '#00C27C', '#628EFF', '#E5C646'];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your expense</Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.45}
        coverFill={'#FFF'}
      />
      <Text style={styles.text}>Aug 2022</Text>
    </View>
  );
};

export default ExpensePieChart;
