import React from 'react'
import { Actions } from './App'

function Todo({todo, dispatch}) {
  return (
    <div className='todo'>
        <span>{todo.name}</span>

        <div className='actions'>
          <button>Edit</button>
          <button onClick={() => dispatch({type: Actions.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    </div>
  )
}

export default Todo