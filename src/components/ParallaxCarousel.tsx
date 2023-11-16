import React from 'react';
import {View, StyleSheet, useWindowDimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel-v4';

const data = [
  {
    title: 'Item 1',
    illustration:
      'https://cdn.shopify.com/s/files/1/0372/5675/7381/files/Multi-models-banner-Web-1a.png?v=1686132625',
  },
  {
    title: 'Item 2',
    illustration:
      'https://cdn.shopify.com/s/files/1/0372/5675/7381/files/Multi-models-banner-Web-1a.png?v=1686132625',
  },
  {
    title: 'Item 3',
    illustration:
      'https://cdn.shopify.com/s/files/1/0372/5675/7381/files/Multi-models-banner-Web-1a.png?v=1686132625',
  },
  {
    title: 'Item 3',
    illustration:
      'https://cdn.shopify.com/s/files/1/0372/5675/7381/files/Multi-models-banner-Web-1a.png?v=1686132625',
  },
  {
    title: 'Item 3',
    illustration:
      'https://cdn.shopify.com/s/files/1/0372/5675/7381/files/Multi-models-banner-Web-1a.png?v=1686132625',
  },
  {
    title: 'Item 3',
    illustration:
      'https://cdn.shopify.com/s/files/1/0372/5675/7381/files/Multi-models-banner-Web-1a.png?v=1686132625',
  },
];

export default function ParallaxCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const {width: screenWidth} = useWindowDimensions();

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        source={{uri: item.illustration}}
        // containerStyle={styles.imageContainer}
        style={styles.image}
      />
      {/* <Text style={styles.title}>{item.title}</Text> */}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Carousel
        layout="default"
        vertical={false}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth < 600 ? screenWidth / 1.13 : 340}
        inactiveSlideScale={0.95}
        inactiveSlideShift={2}
        loop={true}
        loopClonesPerSide={5}
        onScrollIndexChanged={index => {
          console.log(index);
          setActiveIndex(index);
        }}
      />
      <View style={styles.dotContainer}>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    height: 150,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  dotContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#663399',
    width: 35,
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});
