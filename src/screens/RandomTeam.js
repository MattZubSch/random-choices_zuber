import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const RandomTeam = ({navigation}) => {

    // const [selection, setSelection] = useState('')

    // const handlerReturnButton = () => {
    //     setSelection('')
    //     props.onSelectOption(selection)
    // }

    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.title}>Sortear por Equipos</Text>
            <Button onPress={() => { navigation.navigate('Home')}} title={'Volver'}></Button>
        </View>

    )
}

const styles = StyleSheet.create ({
    title: {
        margin: '5%',
        fontSize: 30,
    },
    categoryContainer:{
        margin: 10,
        flex: 1,
        backgroundColor: "#EEECE8",
        height: 1,
        alignItems: "center",
    },
})
export default RandomTeam