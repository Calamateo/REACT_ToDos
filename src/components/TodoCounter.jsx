import React from 'react'

const estilos = {

}


function TodoCounter({completedTodos, totalTodos}) {
  return (
    <div className="text-center pt-2">  
        <h2 style={estilos}>{`Haz completado ${completedTodos} de ${totalTodos} To do`}</h2>
    </div>
  )
}

export { TodoCounter }