import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text>Red Card</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text>blue Card</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>green Card</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>green Card</Text>
        </View>
      </View>
    </View>
  );
};
export default FlatCard;
const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
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

  redCard: {
    backgroundColor: 'red',
  },
  blueCard: {
    backgroundColor: 'blue',
  },
  greenCard: {
    backgroundColor: 'green',
  },
});
