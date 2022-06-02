import React from "react";
import { AppUI } from "./AppUI";	


// const defaultitem =[
//   {text: 'Chop an onion',completed:false},
//   {text: 'View a course', completed: true},
//   {text: 'Crying whit la llorona', completed: false},
//   {text: 'I want to gonna die', completed: true},
// ]

function useLocalStorage(itemName, initialValue) {

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  //se crean las listas que tendran los valores de los item
  const [item, setItem] = React.useState(initialValue);
 
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }   

      setItem(parsedItem);
      setLoading(false);
      } catch (error) {
        setError(error)
      }
    }, 3000);
  },[]);

  
  
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  return {
    item,
    saveItem,
    loading,
    error
  }
}


function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('item_V1', []);
 
  //Valores de busque se mandan mediante estado para que lo cache itemearch 
  const [searchValue, setSearchValue] = React.useState('');

  //Se declara searchedItem como un array
  let searchedItem = [];

  //Evaluamo si searchValue tiene informacion, si esta vacio se le asigna item a searchedItem
  if (!searchValue.length>=1) {
    searchedItem = todos
  } else {
    //Se cambia todo a minusculas para poder evaluar mejor
    searchedItem = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      //Buscara dentro de item los que incluyas palabras de searchValue, arrojando en el map de items los que salgan aqui
      return todoText.includes(searchText);
    })
  }

  //Se filtra la informacion de cuantos tienen el status de completed y cuantos hay en total  
  const completeditem = todos.filter(todo => todo.completed).length;
  const totalItem = todos.length;

  //La funcion recibe un texto, en el que evaluara que texto es, luego se crea una lista nueva y despues se cambia la propiedad de completed a true, luego se guarda en la lista anterior
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newitem = [...todos];
    newitem[todoIndex].completed = true;
    saveTodos(newitem);
  }

  //La funcion recibe un texto, en el que evaluara que texto es, luego se crea una lista nueva y despues se cambia la propiedad de completed a true, luego se guarda en la lista anterior
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newitem = [...todos];
    newitem.splice(todoIndex, 1);
    saveTodos(newitem);
  }

  // console.log('Render antes del useEffect')
  // React.useEffect(() =>{
  //   console.log('use Effect')
  // },[]);  
  
  // console.log('Render despues del useEffect')

  return (
    <div>
    <AppUI 
    loading = {loading}
    error = {error}
    totalItem = {totalItem}
    completeditem = {completeditem}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedItem = {searchedItem}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
    </div>
  );
}

export default App;
