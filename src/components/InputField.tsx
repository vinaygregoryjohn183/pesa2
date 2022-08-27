import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {signUpFieldsEnum} from '../constants/signUp';

interface InputFieldProps {
  label: string;
  data: {};
  setData: (label, value) => void;
}

export const InputField = (props: InputFieldProps) => {
  const {label, data, setData} = props;

  const [isFocussed, setIsFocussed] = useState(false);
  return (
    <View>
      {isFocussed || data[label] ? (
        <Text style={styles.focussedLabelText}>{signUpFieldsEnum[label]}</Text>
      ) : null}

      <TextInput
        value={data[label]}
        keyboardType={
          label === 'age' || label === 'annualIncome' ? 'numeric' : undefined
        }
        selectionColor="#3F60A6"
        placeholder={isFocussed ? '' : signUpFieldsEnum[label]}
        style={[
          label !== 'name' ? styles.fixedWidth : {},
          styles.textInput,
          isFocussed || data[label] ? styles.textInputFocussed : {},
        ]}
        onFocus={() => {
          setIsFocussed(true);
        }}
        onBlur={() => {
          setIsFocussed(false);
        }}
        onChange={e => {
          setData(label, e.nativeEvent.text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#AFAFAF',
    color: '#000000',
    fontWeight: '500',
    padding: 0,
    fontSize: 14,
  },
  textInputFocussed: {
    borderBottomColor: '#2B4985',
    fontWeight: '600',
    fontSize: 16,
  },
  focussedLabelText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
  },
  fixedWidth: {
    width: '60%',
  }
});
