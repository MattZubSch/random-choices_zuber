import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native"
import Card from "./Card"
import { useState } from "react"

const RenderCategory = props => {

    const [work, setWork] = useState(false)
    
    const { category } = props


    function handlerWork(){
        setWork(!work)
    }
    return(
        <View>
            <TouchableOpacity onPress={handlerWork}>

            <Card style={styles.categoryContainer} onClick={handlerWork}>
                <Button title={"▶"} style={styles.button}/>
                <Text style={styles.category} >
                    {category}
                </Text>
            </Card>
            {work && (
                <Text>hola</Text>
                )}
        </TouchableOpacity>
        </View>
    )
}

export default RenderCategory

const styles = StyleSheet.create({
    categoryContainer:{
        margin: 3,
        width: '100%',
        // maxWidth: 500,
        padding: 10,
        shadowColor: "black",
        flexDirection: "row",
        // justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
       
    },
    category: {
        margin: 10,
        fontSize: 30,
        fontWeight: "500",
        color: "black",
        alignItems: "center",
        justifyContent: 'center'
    },
    button: {
        alignContent: "center",
        // justifyContent: 'center',
    }
})
//<TouchableOpacity>
{/* <View style={styles.button}>
<Text style={styles.buttonText}>TouchableOpacity</Text>
</View>
</TouchableOpacity> */}