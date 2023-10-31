import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Seperator = () => {
  return (
    <View style={styles.separator}>
      {/* <Text>Hello</Text> */}
    </View>
  );
};
export default Seperator;

const styles = StyleSheet.create({
  separator: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
});
