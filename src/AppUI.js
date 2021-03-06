import React from 'react'

import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

function AppUI({
    loading,
    error,
    totalItem,
    completeditem,
    searchValue,
    setSearchValue,
    searchedItem,
    completeTodo,
    deleteTodo,

}) {
  return (
    <React.Fragment>
  
    <TodoCounter 
    completedTodos = {completeditem}
    totalTodos = {totalItem}
    />
    <TodoSearch 
    searchValue = {searchValue} 
    setSearchValue = {setSearchValue}
    />
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
    <CreateTodoButton />
    
  </React.Fragment>

  )
}

export {AppUI}