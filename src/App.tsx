import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details from './screens/Details';
import AddToCart from './AddToCart';

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
};
const stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <>
      
      {/* <View>
        <Text>Hello</Text>
      </View> */}
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Trending Products'}}
          />
          <stack.Screen
            name="Details"
            component={Details}
            options={{title: 'Product Details'}}
          />
          <stack.Screen
            name="AddToCart"
            component={AddToCart}
            options={{title: 'Add to Cart'}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
