import React, {useState} from 'react';
import {View, Button,StyleSheet, Text} from 'react-native';

import Modal from 'react-native-modal';

const BottomSheet = ({ isVisible, onSwipeComplete }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onSwipeComplete}
      swipeDirection={['down']}
      style={styles.modal}
    >
      <View style={styles.content}>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        <Text>This is the bottom sheet content.</Text>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default function BottomSheetExample() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Show Bottom Sheet" onPress={toggleBottomSheet} />
      <BottomSheet
        isVisible={isBottomSheetVisible}
        onSwipeComplete={() => setBottomSheetVisible(false)}
      />
    </View>
  );
}
