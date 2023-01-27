import {View, TextInput, Button, StyleSheet} from "react-native"


export default function AddItemsContainer({handleSetItem, item, handleAdd}){
    return(
        <View style={styles.textInputContainer}>
        <View style={{flexDirection: "row"}}>
            <TextInput
            placeholder='Ingresar tarea'
            style={styles.textInput}
            onChangeText={handleSetItem}
            value={item}
            />
            <View style={styles.addButton}>
            <Button
            title='Agregar'
            onPress={handleAdd}
            color={"#8FC8DA"}
            />
        </View>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer:{
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 30,
        alignItems: "center",
    },
    addButton:{
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: "rgb(155, 120, 180)",
        shadowColor: "rgb(20, 10, 30)",
        shadowOffset: {width: 0.1, height: 0.4},
        shadowOpacity: 0.7
    },
    textInput:{
        backgroundColor: "#DEDBD5",
        borderRadius: 10,
        width: 200,
        shadowColor: "black",
        shadowOffset: {width: 0.1, height: 0.4},
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
})
