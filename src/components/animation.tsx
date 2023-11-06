import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withRepeat
} from 'react-native-reanimated';

const App = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const defaultAnim = useSharedValue(200);
  const changedAnim = useSharedValue(200);

  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }));
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: changedAnim.value }],
  }));

  React.useEffect(() => {
    defaultAnim.value = withRepeat(
      withSpring(-defaultAnim.value),
      -1,
      true
    );
    changedAnim.value = withRepeat(
      withSpring(-changedAnim.value, {
        mass: 10,
        damping: 40,
      }),
      -1,
      true
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title={isBottomSheetVisible ? 'Close Bottom Sheet' : 'Open Bottom Sheet'}
        // onPress={toggleBottomSheet}
      />

      {/* {isBottomSheetVisible && (
        <BottomSheet
          index={0}
          snapPoints={['25%', '50%', '75%', '100%']}
          enableOverDrag={true}
        > */}
          <Animated.View style={[styles.box,animatedChanged]}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <Text style={styles.text}>This is the content of the bottom sheet</Text>
            </View>
          </Animated.View>
        {/* </BottomSheet>
      )} */}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    box: {
      height: 80,
      width: 80,
      margin: 20,
      borderWidth: 1,
      borderColor: '#b58df1',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#b58df1',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  });

export default App;
