import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    transactionDetails:{
        backgroundColor: '#ffffff',
        margin: 16,
        borderRadius: 12,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#2B4985',
        borderWidth: 1,
        marginTop: 20
     },
     textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#AFAFAF',
        color: '#000000',
        fontWeight: '500',
        padding: 0,
        fontSize: 14,
        marginTop: 5,
        width: '90%'
      },
      textInputFocussed: {
        borderBottomColor: '#2B4985',
        fontWeight: '600',
        fontSize: 16,
      },
      titleText:{
        fontWeight: '700',
        fontSize: 16,
        color: '#000000',
        marginTop: 20,
        marginLeft: 20,
       },
       title:{
        fontWeight: '500',
        fontSize: 14,
        color: '#000000',
        marginTop: 20
       },
       splitText:{
        fontWeight: '600',
        fontSize: 14,
        color: '#6264FF'
       },
       touchOpacity:{
       marginTop: 20,
       marginLeft: 15,
       marginBottom: 15
       }
  });
  export default styles;