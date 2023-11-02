import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const DummyData = [
  {id: 1, text: 'Item 1'},
  {id: 2, text: 'Item 2'},
  {id: 3, text: 'Item 3'},
  {id: 4, text: 'Item 4'},
  {id: 5, text: 'Item 5'},
  {id: 6, text: 'Item 6'},
  {id: 7, text: 'Item 7'},
  {id: 8, text: 'Item 8'},
  {id: 9, text: 'Item 9'},
  {id: 10, text: 'Item 10'},
  {id: 11, text: 'Item 11'},
  {id: 12, text: 'Item 12'},
  {id: 13, text: 'Item 13'},
  {id: 14, text: 'Item 14'},
  {id: 15, text: 'Item 15'},
  {id: 16, text: 'Item 16'},
  {id: 17, text: 'Item 17'},
  {id: 18, text: 'Item 18'},
  {id: 19, text: 'Item 19'},
  {id: 20, text: 'Item 20'},
];

const ITEMS_PER_PAGE = 2;

const InfiniteScroll = () => {
  const [data, setData] = useState(DummyData.slice(0, ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        const start = page * ITEMS_PER_PAGE;
        const end = (page + 1) * ITEMS_PER_PAGE;
        const newData = DummyData.slice(start, end);
        setData([...data, ...newData]);
        setLoading(false);
        setPage(page + 1);
      }, 1000); // Simulate a delay
    }
  };

  const renderItem = ({item}) => (
    <View style={{padding: 16}}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && <Text>Loading...</Text>}
    />
  );
};

export default InfiniteScroll;
