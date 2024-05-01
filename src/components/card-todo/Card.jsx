/* eslint-disable react/prop-types */
import React from 'react'

function Card({todo, removeTodo, completeTodo}) {

    return (
    <div>
    <div className='todo' key={todo.id} style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
    <div className='content'>
      <p>{todo.text}</p>
      <p className='categoty'>
        ({todo.category})
      </p>
    </div>
    <div>
      <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className='delete' onClick={()=> removeTodo(todo.id)}>X</button>
    </div>
  </div>
    </div>
  )
}

export default Card