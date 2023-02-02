import React, { useState} from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Button
} from "react-native";
import CategoryList from "../Componentes/CategoryList";

import Colors from "../constants/Colors";

const MainScreen = () => { 

    const categoryList = ['Sortear Numero', 'Armar Equipo Aleatorio']

    return (
        <CategoryList 
        list={categoryList}/>
    )
}


const styles = StyleSheet.create({
    categoryContainer:{
        margin: 10,
        flex: 1,
        backgroundColor: "#EEECE8",
        height: 1
    },
    subtitle: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "500",
        color: "black",
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default MainScreen