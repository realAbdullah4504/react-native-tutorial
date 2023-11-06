import React, {useState, useRef} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const SIZE = 120;
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const App = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const offset = useSharedValue(0);

  // console.log(screenHeight)

  const height = useSharedValue(0);

  const onLayout = event => {
    height.value = event.nativeEvent.layout.height;
  };

  const pan = Gesture.Pan()
    .onChange(event => {
      offset.value += event.changeY;
    })
    .onUpdate(event => {
      console.log(event.translationY);
    })
    .onFinalize(event => {
      offset.value = withDecay({
        velocity: event.velocityY,
        rubberBandEffect: true,
        clamp: [-(height.value / 2) + SIZE / 2, height.value / 2 - SIZE / 2],
      });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  const bottom = useRef();
  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
    console.log(bottom?.current);
  };


  return (
    <View onLayout={onLayout} style={{flex: 1}}>
      <Button
        title={
          isBottomSheetVisible ? 'Close Bottom Sheet' : 'Open Bottom Sheet'
        }
        // onPress={toggleBottomSheet}
        onPress={toggleBottomSheet}
      />

      {isBottomSheetVisible && (
        <BottomSheet
          ref={bottom}
          index={0}
          snapPoints={['25%', '50%', '75%', '100%']}
          // enableOverDrag={true}
          // enableContentPanningGesture={true}
          enablePanDownToClose={true}
          // handleIndicatorStyle={{backgroundColor: 'yellow'}}
        >
          <View style={styles.container}>
            <Text style={styles.textContainer}>Bottom Sheet</Text>
          </View>
          {/* <View  style={styles.wrapper}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </GestureDetector>
      </View> */}
        </BottomSheet>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
  },
  textContainer: {
    color: 'white',
    fontSize: 24,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: SCREEN_HEIGHT,
    // position: 'absolute',
    // top: SCREEN_HEIGHT/2,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 20,
    cursor: 'grab',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
