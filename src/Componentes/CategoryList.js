import {View, FlatList, StyleSheet} from "react-native"
import RenderCategory from "./Category"

export default function CategoryList({list}){
    return(
        <View style={styles.listContainer}>
            <FlatList
            data={list}
            renderItem={({item}) => <RenderCategory item={item} />}
            keyExtractor={item => item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flex: 10,
        justifyContent: "center",
        alignItems:"center",
        color: "white"
    },
})