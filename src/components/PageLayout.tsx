import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CustomeLinearGradient} from './CustomLinearGradient';

interface PageLayoutProps {
  children: ReactNode;
  pageLayoutStyle?: any;
}

export const PageLayout = (props: PageLayoutProps) => {
  const {children, pageLayoutStyle = {}} = props;
  return (
    <CustomeLinearGradient>
      <ScrollView
        contentContainerStyle={[styles.signUpPageContainer, pageLayoutStyle]}>
        <View style={{flex: 1}}>{children}</View>
      </ScrollView>
    </CustomeLinearGradient>
  );
};

const styles = StyleSheet.create({
  signUpPageContainer: {
    padding: 20,
  },
});
