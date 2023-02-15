import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import PlayRandomNumber from "../screens/PlayRandomNumber";
import RandomNumber from "../screens/RandomNumber";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const RndNumberNavigator = () => {
    return (
            <Stack.Navigator 
            initialRouteName='RandomNumberScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS ==='android' ? Colors.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
                // headerShown: false,
                // animation: 'none'
            }}>
                <Stack.Screen 
                name='RandomNumberScreen' 
                component={RandomNumber} 
                options={{
                    title: 'Sortear Numero'
                }}/>
                <Stack.Screen 
                name='PlayRandomNumber' 
                component={PlayRandomNumber} 
                options={{
                    title: 'Sortear Numero'
                }}/>
            </Stack.Navigator>
    )
}

export default RndNumberNavigator