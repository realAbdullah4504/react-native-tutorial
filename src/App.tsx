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

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

const stack = createNativeStackNavigator<RootStackParamList>();
const App = (): JSX.Element => {
  return (
    <>
      {/* <View>
        <Text>Hello</Text>
      </View> */}
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Details" component={Details} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
