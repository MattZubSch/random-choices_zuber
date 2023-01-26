import { StyleSheet, TextInput, View, Button } from "react-native"
import React from "react"

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Escribir aqui"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button title="Agregar" onPress={onAddItem} />
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    width: "70%",
    height: 50,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
})
