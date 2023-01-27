import {View, FlatList, StyleSheet} from "react-native"
import RenderItem from "./Item"

export default function ItemList({list, handleModal, isComplete, handleCompleteItem}){
    return(
        <View style={styles.listContainer}>
            <FlatList
            data={list}
            renderItem={({item}) => <RenderItem item={item} handleModal={()=> handleModal(item)} isComplete={()=> isComplete(item)} handleCompleteItem={()=> handleCompleteItem(item)}/>}
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