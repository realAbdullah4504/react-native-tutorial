import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.smallText}>Home</Text>
        <Button
          onPress={() => navigation.replace('Details', {productId: '123'})}
          title="Details"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
