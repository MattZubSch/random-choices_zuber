import {View, FlatList, StyleSheet} from "react-native"
import RenderCategory from "./Category"

export default function CategoryList({list}){
    return(
        <View style={styles.listContainer}>
            <FlatList
            data={list}
            renderItem={({item}) => <RenderCategory category={item} />}
            keyExtractor={item => item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flex: 1,
        // justifyContent: "center",
        // alignItems:"center",
        marginLeft: '3%',
        marginRight: '4%',
        color: "white"
    },
})