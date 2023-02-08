import React, { useState, useEffect} from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Button,
  TouchableOpacity,
  Dimensions, 
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import Card from "../Componentes/Card";
import Colors from "../constants/Colors";


const MainScreen = ({ navigation }) => { 
    // const [selection, setSelection] = useState('')

    // const [isPortrait, setIsPortrait] = useState(true)

    // const onPortrait = () => {
    //     const dim = Dimensions.get('screen');
    //     return dim.height >= dim.width;
    // }

    // const statePortrait = () => setIsPortrait(onPortrait())

    // useEffect(() => {
    //     Dimensions.addEventListener('change', statePortrait)
    //     return () => {
    //         Dimensions.removeEventListener('change', statePortrait)
    //     }
    // })

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} style={styles.mainContainer} >
           <ScrollView>
             <TouchableOpacity onPress={() => { navigation.navigate('RandomNumber')}}>
                 <Card style={styles.categoryContainer}>
                     <Button title={"▶"} style={styles.button}/>
                     <Text style={styles.category} >
                         Sortear Numero
                     </Text>
                 </Card>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => { navigation.navigate('RandomList')}}>
                 <Card style={styles.categoryContainer}>
                     <Button title={"▶"} style={styles.button}/>
                     <Text style={styles.category} >
                         Sortear por Lista
                     </Text>
                 </Card>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => { navigation.navigate('RandomTeam')}}>
                 <Card style={styles.categoryContainer}>
                     <Button title={"▶"} style={styles.button}/>
                     <Text style={styles.category} >
                         Sortear Equipos
                     </Text>
                 </Card>
             </TouchableOpacity>
           </ScrollView>
        </KeyboardAvoidingView>
        // <View>
        //     <Text style={styles.category}>MainScreen</Text>
        // </View>
        //  <View style={{flex: 1}}> 
        //     <View style={styles.header}>
        //         <Text style={styles.title}>ADD TASKS</Text>
        //     </View> 
            
        //     <ScrollView>
                
        //     </ScrollView>

        //     <View style={styles.footer}>
        //         <Button title="ADD TASKS" onPress={ () => navigation.push('AddTasks') } />
        //         <Button title="VIEW TASKS" onPress={ () => navigation.push('ViewTasks') } />
        //     </View>
        // </View>
    )
}


const styles = StyleSheet.create({
    categoryContainer:{
        margin: 3,
        padding: 10,
        width: '90%',
        minWidth: Dimensions.get('window').width * 0.9,
        maxWidth: '95%',
        shadowColor: "black",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        // justifyContent: 'center'
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        flexDirection: "column",
    },
    category: {
        margin: 10,
        width: '80%',
        minWidth: 200,
        fontSize: 30,
        fontWeight: "500",
        color: "black",
        alignItems: "center",
        justifyContent: 'center'
    },
    button: {
        height: Dimensions.get('window').width / 4
    },
    image: {
        width: "8%",
        justifyContent: 'center'
    },
    mainContainerId: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//<Image style={styles.image} source={require('../../assets/info_element.png')}  />
//onPress={() => setSelection('number')} onChange={props.onSelectOption(selection)}
export default MainScreen