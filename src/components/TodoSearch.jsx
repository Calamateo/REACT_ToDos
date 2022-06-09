import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValuechange = (event) => {
    console.log(event.target.value);
    var valor = event.target.value;
    setSearchValue(valor); 
  }

  return (
    <div className="text-center py-3">
          <input 
          placeholder="Cebolla" 
          value={searchValue}
          onChange={onSearchValuechange}
          />
          <p>{searchValue}</p>
    </div>
  )
}

export {TodoSearch}