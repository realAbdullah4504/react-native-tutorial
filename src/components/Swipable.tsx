// SwipeableDelete.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { TrashIcon } from 'react-native-heroicons/outline'; 

const SwipeableDelete = ({ onDelete, children }) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, 0, 100],
    });

    return (
      <TouchableOpacity onPress={onDelete}>
        <View
          style={{
            // backgroundColor: 'red',
            backgroundColor:'#ffdddd',
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding:20 ,
            height: '100%',
            // width:340
          }}>
          <TrashIcon color={'red'} size={20}/>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default SwipeableDelete;
