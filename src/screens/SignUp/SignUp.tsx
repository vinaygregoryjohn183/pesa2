import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {InputField} from '../../components/InputField';
import {PageLayout} from '../../components/PageLayout';
import {signUpFieldsEnum} from '../../constants/signUp';

interface signUpData {
  name: string;
  age: number;
  occupation: string;
  annualIncome: number;
}

export const SignUp = () => {
  const signUpFieldsArray = Object.keys(signUpFieldsEnum);
  const defaultData = {
    name: '',
    age: null,
    occupation: '',
    annualIncome: null,
  };

  const [signUpData, setSignUpData] = useState<signUpData>(defaultData);

  const setSignUpDataState = (label, value) => {
    setSignUpData({...signUpData, ...{[label]: value}});
  };

  console.log(signUpData);
  return (
    <PageLayout>
      <Text style={styles.signUpTitle}>Sign Up</Text>
      <View>
        {signUpFieldsArray.map((label, index) => (
          <View
            key={`${label}${index}`}
            style={[
              styles.inputFieldContainer,
              index === signUpFieldsArray.length - 1 ? {marginBottom: 20} : {},
            ]}>
            <InputField
              data={signUpData}
              setData={setSignUpDataState}
              label={label}
            />
          </View>
        ))}
      </View>
      <Pressable style={styles.buttonContainer} onPress={() => {}}>
        <Text style={styles.create}>Create</Text>
      </Pressable>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  signUpPageContainer: {
    padding: 20,
  },
  inputFieldContainer: {
    marginTop: 38,
  },
  signUpTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    backgroundColor: '#6264FF',
    borderRadius: 12,
    width: 95,
    alignSelf: 'center',
  },
  create: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    paddingVertical: 8,
    alignSelf: 'center',
  },
});
