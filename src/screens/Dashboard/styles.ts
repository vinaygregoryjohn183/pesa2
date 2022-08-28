import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
 container: {
     height: '100%'
 },
 budgetAndPieChart: {
    justifyContent: 'center',
    alignItems: 'center',
 },
 box1: {
    height:10,
    width: 10,
    backgroundColor: '#6398E9',
    marginHorizontal: 10
 },
 box2: {
    height:10,
    width: 10,
    backgroundColor: '#C35BA0',
    marginHorizontal: 10
 },
 box3: {
    height:10,
    width: 10,
    backgroundColor: '#00C27C',
    marginHorizontal: 10
 },
 box4: {
    height:10,
    width: 10,
    backgroundColor: '#E5C646',
    marginHorizontal: 10
 },
 pieChartContainer: {
    backgroundColor: '#FFFFFF',
    height: 450,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
},
 headerText: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20
},
text: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20
},
card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
},
budgetCard: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#8082ED',
    width: 220,
    borderRadius: 8,
    padding: 8
},
cardText: {
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 14,
},
budgetText: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 19,
},
title: {
    marginTop: 10,
    fontWeight: '700',
    color: '#6C6CFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25
},
});

export default styles;
