import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "../screens/MainScreen";
import RandomList from "../screens/RandomList";
import RandomNumber from "../screens/RandomNumber";
import RandomTeam from "../screens/RandomTeam";
import Header from "../Componentes/Header";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (

        <NavigationContainer>
            <Header title={'Random Choices'}/>
            <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                // headerShown: false,
                // animation: 'none'
            }}
            >
                <Stack.Screen name='Home' component={MainScreen} />
                <Stack.Screen name='RandomList' component={RandomList} />
                <Stack.Screen name='RandomNumber' component={RandomNumber} />
                <Stack.Screen name='RandomTeam' component={RandomTeam} />
        </Stack.Navigator>
    </NavigationContainer>
        )
}

export default AppNavigator;