import React, {useState} from 'react';

import {
  Pressable,
  // Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import BottomSheetExample from './BottomSheetExample';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import BottomSheetExample1 from './BottomSheetExample1';
import {useTheme, Button, Surface, Text, TextInput} from 'react-native-paper';

// const theme=useTheme();
const Home = ({navigation}) => {
  const [bottom, setBottom] = useState(true);
  const items = useSelector(state => state.items.items);
  // console.log('items', items);

  const styles = themeStyles();
  // const theme=useTheme();
  // console.log(theme);

  //   console.log(navigation);
  return (
    <Surface style={{flex: 1}}>
      <TextInput
        style={{
          width: '95%',
          // marginLeft: '5%',
          alignSelf: 'center',
          // borderRadius: 20, // Round all four corners
          marginTop: 10,
          paddingHorizontal: 10, // Add some padding to the input for better appearance
          borderWidth: 1, // You can add border styles as needed
          borderColor: 'gray',
        }}
      />
      {bottom && (
        <View>
          <Text style={{color: 'red'}}>hellsdfasdfafafdso</Text>
        </View>
      )}
      <Surface
        style={{
          width: '80%',
          // flex: 1,
          // flexDirection: 'row',
          // height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 50,
          // backgroundColor: '#fff',
          marginLeft: '10%',
          marginTop: 50,
          elevation: 10,
          // paddingHorizontal:0,
        }}
        mode="elevated"
        elevation={3}>
        {/* <View>
          <Text>dsfsdfdfsfdsf</Text>
        </View> */}
        <Button
          mode={'elevated'}
          style={{
            //   borderRadius: 50,
            //   elevation: 25,
            width: 200,
            //   marginBottom: 10,
          }}
          // style={{flex:1}}
          contentStyle={{height: 50}}
          onPress={() => setBottom(!bottom)}>
          This is a Button
        </Button>
      </Surface>
      <Surface
        style={{
          flex: 1,
          alignItems: 'center',
          width: '80%',
          marginLeft: '10%',
          marginVertical: 100,
          justifyContent: 'center',
          // borderRadius: 50,
        }}
        mode="elevated"
        elevation={3}>
        <TouchableNativeFeedback
          // onPress={() => {
          //   navigation.navigate('Article1', {screen: 'SubArticle'});
          // }}
          style={{
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: 120,
              height: 40,
              backgroundColor: 'red',
              borderRadius: 50, // Apply a rounded border to the View
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Home</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => setBottom(!bottom)}>
          <View>
            <Text>Bottom Sheet Example</Text>
          </View>
        </TouchableNativeFeedback>
      </Surface>
    </Surface>
  );
};
export default Home;

const themeStyles = () => {
  const theme = useTheme();
  // console.log(theme);
  return StyleSheet.create({
    container: {
      // flex: 1,
      width: 100,
      height: 50,
      // backgroundColor: theme.colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    textColor: {
      // color: theme.colors.primary,
    },
  });
};
