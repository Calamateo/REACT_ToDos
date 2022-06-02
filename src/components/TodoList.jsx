import React from 'react'

function TodoList(props) {
  return (
    <section className="row justify-content-center">
      <div className="card col-4" >
        <ul className="list-group ">
            {props.children}
        </ul>
      </div>
    </section>
  )
}

export {TodoList}