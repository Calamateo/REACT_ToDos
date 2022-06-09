import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext';
import './CreateTodoButton.css';
import {IoAddCircleSharp} from 'react-icons/io5'

function CreateTodoButton() {

  const {openModal, setOpenModal} =  React.useContext(TodoContext)

  // const onclickButton = () => {
  //   setOpenModal(true);
  // }

  return (
    <div className="text-center py-5 ">
        <span
          className='CreateTodoButton'
          onClick={() => setOpenModal(!openModal)}
        >
          <IoAddCircleSharp />
        </span>
    </div>
  )
}

export {CreateTodoButton}