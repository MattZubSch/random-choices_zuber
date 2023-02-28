import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";
import Card from "../Componentes/Card";
import NumberContainer from "../Componentes/NumberContainer";

const PlayRandomNumber = ({ navigation }) => {
    
    const [reload, setReload] = useState(true)
    
    const numMin = useSelector(state => state.numberFloor.selected)
    const numMax = useSelector(state => state.numberTop.selected)
    
    const generateRandom = () => {
      return Math.floor(Math.random() * (numMax - numMin) + numMin)
    }

    const reloadResult = () => {
      setReload(!reload)

    }

    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.title}>Resultado</Text>
              <Card style={styles.summaryContainer}>
                {reload && (
                  <NumberContainer>{generateRandom()}</NumberContainer>
                )
                }
                {!reload && (
                  <NumberContainer>{generateRandom()}</NumberContainer>
                )}
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <Button title='Reiniciar' onPress={reloadResult}></Button>
                  </View>
                  <View style={styles.button}>
                     <Button title="Volver" onPress={() => { navigation.navigate('RandomNumber')}}></Button>
                  </View>
                </View>
              </Card>
        </View>
    )
}

export default PlayRandomNumber

const styles = StyleSheet.create ({
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "black",
    },
    categoryContainer:{
        margin: 10,
        flex: 1,
        backgroundColor: Colors.secondary,
        height: 1,
        alignItems: "center",
    },
    button: {
        width: Dimensions.get('window').width / 4,
        marginBottom: 5
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
        maxWidth: '80%',
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