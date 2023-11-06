import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AddToCart = ({route}) => {
    const {count} = route.params;
    console.log(count)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24}}>count:{count}</Text>
    </View>
  );
};
export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
