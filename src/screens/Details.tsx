import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route, navigation}: DetailsProps) {
  const {productId} = route.params;
  //   const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.smallText}>Details</Text>
        <Text>{productId}</Text>
        <Button
          onPress={() => navigation.replace('Home')}
          title="Go to Home"
          color="#841584"
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
