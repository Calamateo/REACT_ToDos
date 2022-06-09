import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoForm.css'

function TodoForm() {

  const [newToDoValue, setNewToDoValue] = React.useState('')

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onCancel = () => {
    setOpenModal(false)
  };

  const onAdd = (event) => {
    if (!newToDoValue.trim()) {
      event.preventDefault()
      alert("no hay datos")
    }else {
    event.preventDefault();
    addTodo(newToDoValue)
    setOpenModal(false)
    }
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value)
  }

  return (
    <form onSubmit={onAdd}>
      <label>...</label>
      <textarea 
        value={newToDoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla" 
      />
      <div>
        <button 
        type="button"
        onClick={onCancel}
        >
        cancelar
        </button>
        <button
        type="submit"
        >
            Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
