import {View, Text, StyleSheet} from "react-native"


export default function RenderItem({item, handleDetail, isHighlighted, handleHighlightItem}){
    return(
        <View style={!isHighlighted(item)?  {...styles.itemContainer, backgroundColor: "rgba(255, 255, 255, 0.5)"}: {...styles.itemContainer, backgroundColor: "rgb(34, 139, 34)"}}>
            <Button title={`${!isHighlighted(item)? "▷": "▶" }`} onPress={handleHighlightItem}/>
            <Text style={styles.item}>
                {item}
            </Text>
            <Button title='Detalle' onPress={handleDetail} color={"#44C"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        margin: 3,
        width: 300,
        padding: 7,
        borderRadius: "10",
        shadowColor: "black",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:10,
        marginBottom:10,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        shadowColor: "black",
        shadowOffset: {width: 0.1, height: 0.4},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    item:{
        fontSize: 30,
        width: 200,
        color: "rgb(20, 50, 50)",
        textAlign: "center"
    },
})
