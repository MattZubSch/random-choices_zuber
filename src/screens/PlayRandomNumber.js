import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import Colors from "../constants/Colors";
import RndNumberFloorReducer from "../store/reducers/rndNumberFloor.reducer";
import RndNumberTopReducer from "../store/reducers/rndNumberTop.reducer";
import { useSelector } from "react-redux";

const PlayRandomNumber = ({ navigation }) => {
    const numMin = useSelector(state => state.numberFloor.numberFloor)
    const numMax = useSelector(state => state.numberTop.numberTop)
    
    
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.title}>Sortear</Text>
            <Text style={styles.title}>Numero Minimo: {numMin}</Text>
            <Text style={styles.title}>Numero Maximo: {numMax}</Text>
        </View>
    )
}

export default PlayRandomNumber

const styles = StyleSheet.create ({
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "black",
        // fontFamily: 'OpenSansBold'
    },
    categoryContainer:{
        margin: 10,
        flex: 1,
        backgroundColor: Colors.secondary,
        height: 1,
        alignItems: "center",
    },
    button: {
        width: Dimensions.get('window').width / 4 
    },
    input: {
      alignContent: 'center',
      color: Colors.inputText,
      borderBottomWidth: 2,
      borderBottomColor: "black",
      width: Dimensions.get('window').width / 4,
      textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        paddingHorizontal: 15,
        marginTop: 20,
      },
      inputContainer: {
        width: Dimensions.get('window').width,
        maxWidth: '90%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      summaryContainer: {
        width: 300,
        maxWidth: '50%',
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
      },
      exitButton: {
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width / 8,
        margin: 10,
      }
})