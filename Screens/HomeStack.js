import React from 'react'
import { View, Text } from 'react-native'


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home';
import ShowData from './ShowData';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator style={{backgroundColor: 'white'}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="ShowData"
        component={ShowData}
        options={{headerShown: false}}
      />

    </Stack.Navigator>  

    )
}

export default HomeStack
