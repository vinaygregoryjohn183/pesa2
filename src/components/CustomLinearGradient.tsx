import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface CustomLinearGradientProps {
  children: any;
}

export const CustomeLinearGradient = (props: CustomLinearGradientProps) => {
  const {children} = props;
  return (
    <LinearGradient start={{x: 0.0, y: 1.0}} end={{x: 0.5, y: 1.0}} style={{flex: 1}}  colors={['#ffffff', '#f0f0fe']}>
      {children}
    </LinearGradient>
  );
};
