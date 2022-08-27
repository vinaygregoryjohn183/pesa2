import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface InputFieldProps {
  label: string;
}

export const InputField = (props: InputFieldProps) => {
  const {label} = props;

  const [isFocussed, setIsFocussed] = useState(false);
  return (
    <View>
      {isFocussed ? (
        <Text style={styles.focussedLabelText}>{label}</Text>
      ) : null}

      <TextInput
        selectionColor="#3F60A6"
        placeholder={isFocussed ? '' : label}
        style={[styles.textInput, isFocussed ? styles.textInputFocussed : {}]}
        onFocus={() => {
          setIsFocussed(true);
        }}
        onBlur={() => {
          setIsFocussed(false);
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
});
