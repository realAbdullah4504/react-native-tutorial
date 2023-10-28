import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const ActionCard = () => {
  function openWebsite() {
    Linking.openURL('https://www.google.com');
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Whats New</Text>
        </View>
        <Image
          style={styles.Image}
          source={{uri: 'https://picsum.photos/200'}}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            tincidunt libero. Fusce eget semper libero. Maecenas auctor, justo
            id vestibulum tristique, augue elit consectetur nisl, ac eleifend
            elit justo eu tellus. Aenean et odio at odio laoreet tincidunt. Sed
            sit amet urna eu augue lacinia dapibus. Curabitur a ligula euismod,
            vestibulum elit a, condimentum mi. Suspendisse ullamcorper metus ac
            orci varius, eget laoreet justo interdum. Nunc ac varius purus.
            Nullam congue neque nec justo ultricies, eget sagittis lectus
            vehicula. Vivamus id libero vel ex suscipit lacinia sit amet a
            lorem. Integer eu mi vitae nulla dictum ultricies.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          {/* <Text numberOfLines={3}> */}
          <TouchableOpacity onPress={() => openWebsite()}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite()}>
            <Text style={styles.socialLinks}>Social Links</Text>
          </TouchableOpacity>
          {/* llklk */}
          {/* </Text> */}
        </View>
      </View>
    </View>
  );
};
export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  Image: {
    height: 100,
  },
  bodyContainer: {
    padding: 12,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // height: 40,
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
