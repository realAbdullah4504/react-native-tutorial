import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElement]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElement]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElement]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElement]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElement]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElement]}>
          <Text>Tap</Text>
        </View>
      </ScrollView> 
    </View>
  );
};
export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
      padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElement: {
    backgroundColor: '#f0f0f0',
    elevation: 4,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'red',
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
});
