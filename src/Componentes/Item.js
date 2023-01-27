import {View, Text, StyleSheet, Button} from "react-native"

export default function RenderItem({item, handleModal, isComplete, handleCompleteItem}){
    return(
        <View style={!isComplete(item)?  {...styles.itemContainer, backgroundColor: "#FF5151"}: {...styles.itemContainer, backgroundColor: "#51FF62"}}>
            <Button title={`${!isComplete(item)? "▷": "▶" }`} onPress={handleCompleteItem} color={"#8FC8DA"}/>
            <Text style={styles.item}>
                {item}
            </Text>
            <Button title='Editar' onPress={handleModal} color={"#8FC8DA"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        margin: 3,
        width: 300,
        padding: 7,
        shadowColor: "black",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: {width: 0.1, height: 0.4},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    item:{
        fontSize: 20,
        width: 200,
        textAlign: "center"
    }
})
