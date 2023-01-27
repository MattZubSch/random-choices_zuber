import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ItemList from './src/Componentes/ItemList';
import Modal  from './src/Componentes/Modal';
import AddItem from './src/Componentes/AddItem';

export default function App() {
  const [list, setList] = useState([])
  const [complete, setComplete] = useState([])
  const [item, setItem] = useState("")
  const [itemSelected, setItemSelected] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  function handleAdd(){
    // Chequea que no sea un string vacio y lo agrega a la lista
    if(item && !list.includes(item)){
      setList(prevState => [...prevState, item])
      setItem("")
    }
  }
  
  function handleSetItem(text){
    // Setea el item con el valor del texto que se pase como argumento
    setItem(text.trimStart())
  }

  function handleModal(item){
    // Abre el modal con el item seleccionado
    setItemSelected(item)
    setModalVisible(true)
  }
  
  function isComplete(item){
    // devuelve True si el objeto se marco como completado
    return complete.includes(item)
  }

  function handleCompleteItem(item){
    // Agrega el item elegido a la lista de completados. Si ya se encuentra en la misma, lo quita 
    if(!isComplete(item)){
      setComplete(prevState => [...prevState, item])
    } else{
      setComplete(prevState => prevState.filter((complete)=> item !== complete))
    }
  }

  function handleDelete(filteredItem){
    // Elimina el item de la lista principal
    setList(prevState => prevState.filter((item)=> item !== filteredItem))
    setModalVisible(false)
  }
itemSelected
  function handleHideModal(){
    // Esconde el modal
    setModalVisible(false)
    setItemSelected(null)
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Tareas</Text>
      </View>
      <AddItem 
        handleSetItem={handleSetItem} 
        handleAdd={handleAdd} 
        item={item} 
      />
      <ItemList 
        list={list} 
        handleModal={handleModal} 
        isComplete={isComplete} 
        handleCompleteItem={handleCompleteItem}
      />
      <Modal 
        isVisible={modalVisible} 
        itemSelected={itemSelected} 
        buttonPrimaryAction={()=> handleDelete(itemSelected)} 
        buttonSecondaryAction={()=> handleCompleteItem(itemSelected)} 
        buttonHide={handleHideModal} 
        isComplete={isComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: "#EEECE8",
  },
  titleContainer: {
    height: 200,
    paddingTop: 80,
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "black",
  },
});