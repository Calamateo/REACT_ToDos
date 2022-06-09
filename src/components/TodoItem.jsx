
import React from "react";
import "../css/TodoItem.css";
import { FaTrashAlt} from 'react-icons/fa'
import { CgCheckR} from 'react-icons/cg'

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <CgCheckR />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <FaTrashAlt />
      </span>

    </li>
  );
}
export { TodoItem };
