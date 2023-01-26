import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import AddItem from "./src/Componentes/AddItem"
import ItemList from './src/Componentes/ItemList';
import Modal  from './src/Componentes/Modal';

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [highlightedItems, setHighlightedItems] = useState([])
  const [item, setItem] = useState("")
  const [itemSelected, setItemSelected] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }
  
  function handleAdd(){
    // Verifica que el item no sea un string vacio y que no se encuentre repetido, luego lo añade a la lista de compras
    if(item && !list.includes(item)){
      setList(prevState => [...prevState, item])
      setItem("")
    }
  }


  function handleDetail(item){
    // Abre el modal con el *item* seleccionado
    setItemSelected(item)
    setModalVisible(true)
  }

  function handleDelete(filteredItem){
    // Elimina el *filteredItem* de la lista de items
    setList(prevState => prevState.filter((item)=> item !== filteredItem))
    setModalVisible(false)
  }

  function handleHideModal(){
    // Oculta el modal y setea el item seleccionado a nulo
    setModalVisible(false)
    setItemSelected(null)
  }

  function isHighlighted(item){
    // Indica si el *item* se encuentra en la lista de items marcados
    return highlightedItems.includes(item)
  }

  function handleHighlightItem(item){
    // Agrega el *item* a la lista de items marcados si este no se encuentra en la misma, en caso contrario lo elimina de la lista
    if(!isHighlighted(item)){
      setHighlightedItems(prevState => [...prevState, item])
    } else{
      setHighlightedItems(prevState => prevState.filter((highlightedItem)=> item !== highlightedItem))
    }
  }


  return (
    <View style={styles.mainContainer}>
        <Text style={styles.title}>Lista de Actividades</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      <ItemList list={list} handleDetail={handleDetail} isHighlighted={isHighlighted} handleHighlightItem={handleHighlightItem}/>
      <Modal isVisible={modalVisible} itemSelected={itemSelected} buttonPrimaryAction={()=> handleDelete(itemSelected)} buttonSecondaryAction={()=> handleHighlightItem(itemSelected)} buttonHide={handleHideModal} isHighlighted={isHighlighted}/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: "rgb(100, 40, 100)",
    padding:5
  },
  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#1E283C",
  },
});
