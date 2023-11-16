import * as React from 'react';
import {
  Dimensions,
  Text,
  View,
  Image,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Pagination} from 'react-native-snap-carousel';

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

function ReanimatedCarousel() {
  const width = Dimensions.get('window').width;
  const {width: screenWidth} = useWindowDimensions();
  //   const styles = useStyles(screenWidth);

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
  const carouselRef = React.useRef(null);
  const [tutorialImageIndex, setTutorialImageIndex] = React.useState(0);
  console.log(tutorialImageIndex);
  return (
    <ScrollView style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop
        width={screenWidth}
        // windowSize={12}
        modeConfig={{
        //   parallaxScrollingScale: 0.8,
          
        //   parallaxScrollingOffset: 5,
        //   parallaxAdjacentItemScale: 0.5,
        }}
        height={150}
        // autoPlay={true}
        data={data}
        mode="parallax"
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={renderItem}
        onProgressChange={(
          _offsetProgress: number,
          absoluteProgress: number,
        ) => {
          const currentIndex = carouselRef.current?.getCurrentIndex() || 0;

          if (absoluteProgress > 0.5 || currentIndex === 0) {
            setTutorialImageIndex(currentIndex);
          }
        }}
      />
      <View style={styles.container1}>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === tutorialImageIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default ReanimatedCarousel;

// const useStyles = screenWidth => {
//   return
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 50,
    
    // justifyContent: 'center',
    // alignItems: 'center',
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
  },
  dotStyle: {
    width: 35,
    height: 10,
    borderRadius: 5,
    // marginHorizontal: 8,
    backgroundColor: '#663399',
  },
  inActiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    // marginHorizontal: 8,
    backgroundColor: '#663399',
  },
  container1: {
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
// };
