import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import RandomList from "../screens/RandomList";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const RndListNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='RandomListScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS ==='android' ? Colors.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                 <Stack.Screen 
                name='RandomListScreen' 
                component={RandomList} 
                options={{
                    title: 'Sortear por Lista'
                }}/>
            </Stack.Navigator>
            
    )   
}

export default RndListNavigator