import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
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
        <TodoContext.Provider value ={{
            loading,
            error,
            totalItem,
            completeditem,
            searchValue,
            setSearchValue,
            searchedItem,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };