import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElement]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Lahore Punjab</Text>
          <Text style={styles.cardDescription}>It is a good place</Text>
          <Text style={styles.cardFooter}>Lahore Punjab</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElement: {
    backgroundColor: '#f0f0f0',
    elevation: 3,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'red',
  },
  cardImage: {
    height: 100,
    // width: 100,
    borderRadius: 4,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex:1,
    flexGrow: 1,
    paddingHorizontal:12
  },
  cardTitle: {
    color: 'black',
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardLabel: {
    color: 'black',
    fontSize:14
  },
  cardDescription: {
    color: 'black',
    fontSize:12
  },
  cardFooter: {
    color: 'black',
    fontSize:12
  },
});
