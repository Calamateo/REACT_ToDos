import React from 'react'
import { TodoContext } from './TodoContext/TodoContext';
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { Modal } from "./Modal/Modal";
import { TodoForm } from './components/TodoForm';

function AppUI() {
  
  const {
    error,
    loading,
    searchedItem,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
  
    <TodoCounter/>
    <TodoSearch />
    
 
        <TodoList >
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desespéres</p>}
        {(!loading && !searchedItem.length) && <p>Crea tu primer Todo!</p>}
  
  
        {/* Se genera un array llamado todo que pondra a Todo item la cantidad de veces que sea generado, se mandara con la informacion de key, text y completed*/}
        {searchedItem.map(todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)} 
          onDelete={() => deleteTodo(todo.text)} 
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
        <TodoForm />
      </Modal>
      )}

    <CreateTodoButton setOpenModal={setOpenModal}/>
    
  </React.Fragment>

  )
}

export {AppUI}