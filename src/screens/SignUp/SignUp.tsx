import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField} from '../../components/InputField';
import {PageLayout} from '../../components/PageLayout';

export const SignUp = () => {
  const signUpFields = ['Name', 'Age', 'Occupation', 'Annual Income'];
  return (
    <PageLayout>
      <Text style={styles.signUpTitle}>Sign Up</Text>
      <View>
        {signUpFields.map((label, index) => (
          <View
            key={`${label}${index}`}
            style={[
              styles.inputFieldContainer,
              index === signUpFields.length - 1 ? {marginBottom: 20} : {},
            ]}>
            <InputField label={label} />
          </View>
        ))}
      </View>
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
});
