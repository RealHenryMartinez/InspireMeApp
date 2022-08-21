import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View,
  Image,
} 
  from 'react-native';

// navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// tailwind CSS import 
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './Screens/Home';
import HomeStack from './Screens/HomeStack';

import { ArrowCircleUpIcon} from 'react-native-heroicons/solid'






export default function App() {

  const Tab = createBottomTabNavigator();

  // This section will be used for Tab Navigation
  return (
    <>

      <NavigationContainer>
        <TailwindProvider>
        <Tab.Navigator>
          <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false, tabBarIcon: () => <Image style = {{width: 41, height: 40, alignSelf: 'center', marginTop:20, marginBottom: 20}} source = {require('./assets/arrowUp.png')}/>, tabBarShowLabel: false}} />
         
        </Tab.Navigator>
        </TailwindProvider>
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
