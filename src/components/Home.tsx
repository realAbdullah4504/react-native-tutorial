import React, {useState} from 'react';

import {
  Pressable,
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Button,
} from 'react-native';
import BottomSheetExample from './BottomSheetExample';
import {useSelector, useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const [bottom, setBottom] = useState(false);
  const items = useSelector(state => state.items.items);
  console.log('items', items);

  //   console.log(navigation);
  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('Article1', {screen: 'SubArticle'});
          }}>
          <View style={styles.container}>
            <Text>Home</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setBottom(!bottom)}>
          <View style={styles.container}>
            <Text>Bottom Sheet Example</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      {bottom && (
        <View>
          <BottomSheetExample />
        </View>
      )}
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
