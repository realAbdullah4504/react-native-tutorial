import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 2,
      name: 'Alice Smith',
      status: 'Offline',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 3,
      name: 'Bob Johnson',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 4,
      name: 'Eve Brown',
      status: 'Away',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 5,
      name: 'Charlie Wilson',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 6,
      name: 'Charlie Wilson',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 7,
      name: 'Charlie Wilson',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 8,
      name: 'Charlie Wilson',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
    {
      uid: 9,
      name: 'Charlie Wilson',
      status: 'Active',
      imageUrl:
        'https://images.unsplash.com/photo-1697999199849-ec5c69b324f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <View style={{paddingHorizontal: 8}}>
              <Image style={styles.userImage} source={{uri: imageUrl}} />
            </View>
            <View style={{paddingHorizontal: 8, paddingVertical: 4}}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
    color: 'gray',
  },
});
