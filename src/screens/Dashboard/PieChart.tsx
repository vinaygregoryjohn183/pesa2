import React from 'react';
import {Button, Pressable, Text, TouchableOpacity, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

import styles from './styles';
const ExpensePieChart = ({ response }) => {
  const widthAndHeight = 250;
  const series = [10, 10, 50, 30];
  const sliceColor = ['#6398E9', '#C35BA0', '#00C27C', '#E5C646'];
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
      <View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.box1}/>
        <Text>FOOD</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.box2}/>
        <Text>CLOTHES</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.box3}/>
        <Text>RENT</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.box4}/>
        <Text>TRAVEL</Text>
      </View>
      </View>
    </View>
  );
};

export default ExpensePieChart;
