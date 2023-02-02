import {View, Text, StyleSheet, Button} from "react-native"
import Card from "./Card"

export default function RenderCategory({item}){
    return(
        <View>
            <Card style={styles.categoryContainer}>
                <Text style={styles.category}>
                    {item}
                </Text>
                <Button title={"▶"} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        margin: 3,
        width: '90%',
        padding: 7,
        shadowColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
       
    },
    category: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "500",
        color: "black",
        alignItems: "center",
        justifyContent: 'center'
    }
})
