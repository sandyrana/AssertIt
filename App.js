import 'react-native-gesture-handler';
import * as React from 'react';
import { View,Text,TouchableOpacity, Image,StyleSheet ,SafeAreaView,StatusBar,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen';
import MyProfile from './src/screens/MyProfile';

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const Logout = (props) => {
}
const CreateDrawer = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    contentOptions={(activeTintColor = 'red')}
    >
    <Drawer.Screen name="Home"  component={HomeScreen} />
    <Drawer.Screen name="Profile"  component={MyProfile} />
    <Drawer.Screen name="Logout"  component={Logout} />
    
  </Drawer.Navigator>
);

RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}>    
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="HomeScreen" component={CreateDrawer} />

  </RootStack.Navigator>
);

export default function App(){
  return <NavigationContainer>{RootStackScreen()}</NavigationContainer>;
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})
