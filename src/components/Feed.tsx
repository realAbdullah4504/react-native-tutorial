import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ParallaxCarousel from './ParallaxCarousel';

const Feed = () => {
  return (
    <ScrollView>
      {/* <ParallaxCarousel/> */}
      <Text>Feed</Text>
      <TextInput
        style={style.input}
        placeholder="Click here…"
        onSubmitEditing={Keyboard.dismiss}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.card}>
            <Text style={style.cartText}> hi</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Feed;

const style = StyleSheet.create({
  card: {
    height: 50,
    width: 100,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    // padding: 30,
  },
  container: {
    flex: 1,
    padding: 36,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
});
