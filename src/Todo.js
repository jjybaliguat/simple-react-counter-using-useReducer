import React from 'react'
import { Actions } from './App'

function Todo({todo, dispatch}) {
  return (
    <div>
        <span>{todo.name}</span>

        <button>Edit</button>
        <button onClick={() => dispatch({type: Actions.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
    </div>
  )
}

export default Todo