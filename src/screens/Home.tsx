import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItem from '../components/ProductItem';
import Seperator from '../components/Separator';

//data
import {PRODUCTS_LIST} from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Seperator}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('Details', {product: item})}>
              <ProductItem product={item} />
            </Pressable>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
