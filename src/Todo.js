import React from 'react'
import { Actions } from './App'

function Todo({todo, dispatch}) {
  return (
    <div className='todo'>
        <span style={
          todo.completed? {
            color: "#acacac",
            textDecoration: "line-through"
          } : {
            color: "#000"
          }
        }>{todo.name}</span>

        <div className='actions'>
          <button onClick={() => dispatch({type: Actions.TOGGLE_TODO, payload: {id: todo.id}})} className='btn toggle-btn'>Toggle</button>
          <button className='btn delete-btn' onClick={() => dispatch({type: Actions.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    </div>
  )
}

export default Todo