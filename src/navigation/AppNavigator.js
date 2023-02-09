import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import MainScreen from "../screens/MainScreen";
import RandomList from "../screens/RandomList";
import RandomNumber from "../screens/RandomNumber";
import RandomTeam from "../screens/RandomTeam";
import Header from "../Componentes/Header";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (

        <NavigationContainer>
            <Header title={'Random Choices'}/>
            <Stack.Navigator 
            initialRouteName='Home'
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
            }}
            >
                <Stack.Screen 
                name='Home' 
                component={MainScreen}
                options={{
                    title: 'Inicio'
                }} />
                <Stack.Screen 
                name='RandomList' 
                component={RandomList} 
                options={{
                    title: 'Sortear por Lista'
                }}/>
                <Stack.Screen 
                name='RandomNumber' 
                component={RandomNumber} 
                options={{
                    title: 'Sortear Numero'
                }}/>
                <Stack.Screen 
                name='RandomTeam' 
                component={RandomTeam} 
                options={{
                    title: 'Sortear Equipos'
                }}/>
        </Stack.Navigator>
    </NavigationContainer>
        )
}

export default AppNavigator;