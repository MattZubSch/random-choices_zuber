import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { selectedNumberFloor } from "../store/actions/rndNumberFloor.action";
import { selectedNumberTop } from "../store/actions/rndNumberTop.action";

import Card from "../Componentes/Card";
import Input from "../Componentes/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../Componentes/NumberContainer";


const RandomNumber = ({ navigation }) => {
    const dispatch = useDispatch()

    const [enteredFloorValue, setEnteredFloorValue] = useState('')
    const [enteredRoofValue, setEnteredRoofValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)

    const [selectedFloorNumber, setSelectedFloorNumber] = useState('')
    const [selectedRoofNumber, setSelectedRoofNumber] = useState('')

    const handlerInputFloorNumber = text => {
        setEnteredFloorValue(text.replace(/[^0-9]/g, ""))
      } 
    
      const handlerInputRoofNumber = text => {
        setEnteredRoofValue(text.replace(/[^0-9]/g, ""))
      } 

      const handlerResetInput = () => {
        setEnteredFloorValue('')
        setEnteredRoofValue('')
        setConfirmed(false)
      }
    
      const handlerConfirmInput = () => {
        setConfirmed(true)
        Keyboard.dismiss()
        if (enteredFloorValue < enteredRoofValue) {
          setSelectedFloorNumber(parseInt(enteredFloorValue))
          setEnteredFloorValue('')
          setSelectedRoofNumber(parseInt(enteredRoofValue))
          setEnteredRoofValue('')
        } else {
          setSelectedFloorNumber(parseInt(enteredRoofValue))
          setEnteredRoofValue('')
          setSelectedRoofNumber(parseInt(enteredFloorValue))
          setEnteredFloorValue('')
        }
      }

      const handleDrawConfirm = () => {
        dispatch(selectedNumberFloor(selectedFloorNumber))
        dispatch(selectedNumberTop(selectedRoofNumber))
        navigation.navigate('PlayRandomNumber')
      }

    return (
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
        }}>
          <View style={styles.categoryContainer}>
              <Text style={styles.title}>Sortear Numero</Text>
              <Card style={styles.inputContainer}>
                  <Text style={styles.title}>De</Text>
                  <Input blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLength={7}
                    onChangeText={handlerInputFloorNumber}
                    value={enteredFloorValue}
                    style={styles.input} />
                  <Text style={styles.title}>Hasta</Text>
                  <Input blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLength={7}
                    onChangeText={handlerInputRoofNumber}
                    value={enteredRoofValue}
                    style={styles.input} />
                    <View style={styles.buttonContainer}>
                      <View style={styles.button}>
                        <Button 
                        title='Limpiar' 
                        onPress={handlerResetInput} 
                        color={Colors.accent}/>
                      </View>
                      <View style={styles.button}>
                        <Button 
                        title='Confirmar' 
                        onPress={handlerConfirmInput} 
                        color={Colors.primary}/>
                      </View>
                  </View>
               </Card>
              {confirmed && (
                <Card style={styles.summaryContainer}>
                <Text>Sortear Desde:</Text>
                <NumberContainer>{selectedFloorNumber}</NumberContainer>
                <Text>Hasta:</Text>
                <NumberContainer>{selectedRoofNumber}</NumberContainer>
                  <Button
                    title="Empezar Juego"
                    color={Colors.inputText}
                    onPress={handleDrawConfirm}
                  />
              </Card>
              )}
              <View style={styles.exitButton}>
              <Button title="←" 
              onPress={() => { navigation.navigate('MainScreen')}}
              />
              </View>
          </View>
        </TouchableWithoutFeedback>

    )
}

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

export default RandomNumber