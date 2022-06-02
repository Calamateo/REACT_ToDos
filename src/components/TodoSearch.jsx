import React from 'react'

function TodoSearch({searchValue, setSearchValue}) {


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