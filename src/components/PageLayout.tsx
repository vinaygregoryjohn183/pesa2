import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

interface PageLayoutProps {
  children: ReactNode;
  pageLayoutStyle?: any;
}

export const PageLayout = (props: PageLayoutProps) => {
  const {children, pageLayoutStyle = {}} = props;
  return (
    <ScrollView
      contentContainerStyle={[styles.signUpPageContainer, pageLayoutStyle]}>
      <View style={{flex: 1}}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signUpPageContainer: {
    padding: 20,
  },
});
