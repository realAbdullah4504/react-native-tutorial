import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Feed from './components/Feed';
import Article from './components/Article';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EllipsisHorizontalCircleIcon} from 'react-native-heroicons/outline';
import Home from './components/Home';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TouchableNativeFeedback,
  useColorScheme,
} from 'react-native';
import ReanimatedExample from './components/ReanimatedExample';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './redux/store';
import SubArticle from './components/SubArticle';
import BottomSheetExample1 from './components/BottomSheetExample1';
import BottomSheetExample from './components/BottomSheetExample';
import {PaperProvider} from 'react-native-paper';
import {DarkTheme, LightTheme} from './theme';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Reanimated" component={ReanimatedExample} />
    </Stack.Navigator>
  );
};

const Article1 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Article"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="SubArticle" component={SubArticle} />
    </Stack.Navigator>
  );
};

function App() {
  const color = useColorScheme();
  const theme = color === 'light' ? {...LightTheme} : {...DarkTheme};
  console.log('theme', theme);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView style={{flex: 1}}>
          {/* <BottomSheetExample/> */}
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: {
                  // elevation: 10,
                  overflow: 'hidden',
                  // width: '80%',
                  borderRadius: 10,
                  // marginHorizontal: '10%',
                  // position: 'absolute',
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#fff',
              }}>
              <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                  tabBarIcon: ({color, size}) => (
                    <EllipsisHorizontalCircleIcon color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="BottomSheet" component={BottomSheetExample1} />
              <Tab.Screen name="StackNavigate" component={StackNavigate} />
              <Tab.Screen name="Article1" component={Article1} />
            </Tab.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </Provider>
  );
}
export default App;
