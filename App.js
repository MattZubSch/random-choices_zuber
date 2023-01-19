import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Item } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View 
        style={styles.inputContainer}
        >
        <TextInput placeholder='Item de la Lista'
        style={styles.inputContainer}
        />
        <Button title='+'/>
      </View>
      <View style={styles.listContainer}> 
      <Button title='Name'></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black', 
      borderBottomWidth: 1,
      width: 200
  },
  listContainer: {
    padding: 60,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1
  }

});

