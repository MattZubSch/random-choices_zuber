import React from "react";
import { 
    StyleSheet,
    View,
    Text
     } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"

import AppNavigator from "./AppNavigator";
import RndNumberNavigator from "./RndNumberNavigator";
import RndListNavigator from "./RndListNavigator";

const BottomsTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
    <BottomsTabs.Navigator 
    initialRouteName="Home" 
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    }}
    >
        <BottomsTabs.Screen
        name="Home"
        component={AppNavigator} 
        options={{
        tabBarIcon: ({focused}) => (
            <View style={styles.icon}>
                <Ionicons name="md-home" size={24} color={'black'}/>
                <Text>Inicio</Text>
            </View>
        )}}
        />
        <BottomsTabs.Screen
        name="RandomNumber"
        component={RndNumberNavigator} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style={styles.icon}>
                    <Ionicons name="md-help-circle" size={24} color={'black'}/>
                    <Text>Sortear Numero</Text>
                </View>
            )}}
            />
             <BottomsTabs.Screen
        name="RandomList"
        component={RndListNavigator} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style={styles.icon}>
                    <Ionicons name="md-clipboard" size={24} color={'black'}/>
                    <Text>Sortear Lista</Text>
                </View>
            )}}
            />
    </BottomsTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#7f5df0",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    }, 
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabNavigator