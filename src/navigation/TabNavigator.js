import React from "react";
import { 
    StyleSheet,
    View,
    Text
     } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigator from "./AppNavigator";

const BottomsTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
    <BottomsTabs.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    }}
    initialRouteName="Home" >
        <BottomsTabs.Screen 
        name='Categorias'
        component={AppNavigator}/>
    </BottomsTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    }, 
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabNavigator