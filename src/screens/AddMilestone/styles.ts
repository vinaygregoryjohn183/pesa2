import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
 },
 innerContainer: {
    height: '80%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 24,
    paddingVertical: 31
 },
 label: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: 'black',
    marginBottom: 0
  },
  radioLabel: {
    color: 'black',
    fontSize: 14,
    lineHeight: 16
  }
});

export default styles;
