import React, {FunctionComponent} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export interface BottomSheetProps {
  onClose?: () => void;
  onOpen?: () => void;
  containerStyle?: any;
  contentContainerStyle?: any;
  children: JSX.Element;
  customRbSheetStyle?: any;
  closeOnDragDown?: boolean;
  RbSheetRef: any;
  height?: number;
}

const BottomSheet: FunctionComponent<BottomSheetProps> = ({
  contentContainerStyle,
  children,
  RbSheetRef,
  customRbSheetStyle,
  onClose,
  onOpen,
  closeOnDragDown = true,
  containerStyle,
  height,
}: BottomSheetProps) => {
  console.log('entered');
  return (
    <RBSheet
      ref={RbSheetRef}
      closeOnDragDown={closeOnDragDown}
      closeOnPressMask
      closeOnPressBack
      animationType="none"
      openDuration={100}
      closeDuration={100}
      onClose={onClose}
      onOpen={onOpen}
      height={height}
      customStyles={{
        container: {
          ...(styles.container as Object),
          ...customRbSheetStyle,
        },
      }}>
      <View style={[styles.container, containerStyle]}>
        {children ? (
          <View style={contentContainerStyle}>{children}</View>
        ) : null}
      </View>
    </RBSheet>
  );
};
export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 16,
  },
});
