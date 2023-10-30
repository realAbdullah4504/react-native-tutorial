import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const FormCustomComponent = () => {


  return (
    <View style={styles.container}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={styles.input}
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: '40%',
    height: 50,
    marginHorizontal:5
  },
});

export default FormCustomComponent;
