import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard></FlatCard>
        <ElevatedCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
