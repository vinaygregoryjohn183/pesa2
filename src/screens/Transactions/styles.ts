import { StyleSheet } from "react-native";

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
    title: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 16,
        color: 'black'
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
  export default styles;