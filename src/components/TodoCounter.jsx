import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'


function TodoCounter() {

  const {totalItem, completedItem} =  React.useContext(TodoContext);

  return (
    <div className="text-center pt-2">  
        <h2 >Haz completado {completedItem} de {totalItem} To do</h2>
    </div>
  )
}

export { TodoCounter }