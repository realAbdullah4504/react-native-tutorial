// YourComponent.js
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import SwipeableDelete from './Swipable';
import {ScrollView} from 'react-native-gesture-handler';

const MainComponent = () => {
  const data = [
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},

    // Add more items as needed
  ];

  const handleDelete = itemId => {
    // Implement your delete logic here
    console.log(`Deleting item with id: ${itemId}`);
  };

  const renderItem = ({item}) => (
    <SwipeableDelete onDelete={() => handleDelete(item.id)}>
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 20,
          paddingLeft: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          elevation: 20,
          shadowOffset: {width: 0, height: 2},
        }}>
        <Text>{item.text}</Text>
      </View>
    </SwipeableDelete>
  );

  return (
    // <FlatList
    //   data={data}
    //   renderItem={renderItem}
    //   keyExtractor={item => item.id}
    // />
    <ScrollView>
      {data.map(item => (
        <SwipeableDelete onDelete={() => handleDelete(item.id)}>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 20,
              paddingLeft: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              elevation: 20,
              shadowOffset: {width: 0, height: 2},
            }}>
            <Text>{item.text}</Text>
          </View>
        </SwipeableDelete>
      ))}
    </ScrollView>
  );
};

export default MainComponent;
