import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField} from '../../components/InputField';
import {PageLayout} from '../../components/PageLayout';

export const SignUp = () => {
  const signUpFields = ['Name', 'Age', 'Occupation', 'Annual Income'];
  return (
    <PageLayout>
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
    marginTop: 45,
  },
});
