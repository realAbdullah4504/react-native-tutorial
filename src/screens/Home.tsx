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
import ActivityIndicatorExample from '../components/ActivityIndicatorExample';
import AddToCart from './AddToCart';
import {useState} from 'react';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={decrement}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: '8A2BE2',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Text style={{color: 'white', fontSize: 24}}>-</Text>
        </Pressable>

        <Text style={styles.countText}>{count}</Text>

        <Pressable
          onPress={increment}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: '8A2BE2',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: 'white', fontSize: 24}}>+</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('AddToCart', {count});
          }}
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            backgroundColor: '8A2BE2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Add to cart</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        {/* <ActivityIndicatorExample /> */}

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
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
