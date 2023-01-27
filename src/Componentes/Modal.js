import { StyleSheet, Text, View, Modal as ModalNative, Pressable, Button} from 'react-native'
import React from 'react'

const Modal = ({itemSelected, isVisible, buttonPrimaryAction, buttonSecondaryAction, buttonHide, isComplete}) => {
    return(
        <ModalNative
        animationType='fade'
        transparent={true}
        visible={isVisible}
        >
            <Pressable style={styles.modalStyle} onPress={buttonHide}>
                <View style={!isComplete(itemSelected)? {...styles.modalView, backgroundColor: "#FF5151"}: {...styles.modalView, backgroundColor: "#51FF62"}}>
                    <Text style={styles.modalText}>{itemSelected}</Text>
                    <View style={styles.buttonsContainer}>
                        <Button title='Eliminar' onPress={buttonPrimaryAction}/>
                        <Button title={`${!isComplete(itemSelected)? "Marcar": "Desmarcar"}`} onPress={buttonSecondaryAction}/>
                        <Button title='Ocultar' onPress={buttonHide}/>
                    </View>
                </View>
            </Pressable>

        </ModalNative>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalStyle:{
        flex:1,
        backgroundColor: "rgba(10, 5, 20, 0.5)",
        alignItems: "center",
        justifyContent: "center",
    },
    modalView:{
        minWidth: "70%",
        minHeight:"40%",
        marginVertical: "auto",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius: 30,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText:{
        fontSize: 50,

    }
    ,
    buttonsContainer:{
        paddingTop: 10,
        flexDirection: "row"
    }
})