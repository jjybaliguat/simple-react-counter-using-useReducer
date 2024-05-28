import { useReducer, useState } from 'react';
import './App.css';
import Todo from './Todo';

export const Actions = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  UPDATE_TODO: 'update-todo'
}

function reducer(todos, action){
  switch(action.type){
    case Actions.ADD_TODO:
      return [
        addTodo(action.payload.name), ...todos
      ]
    case Actions.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    case Actions.UPDATE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, name: action.payload.name}
        }
        return todo
      })
    default: 
      return todos
  }

}

function addTodo(name){
  return {
    id: Date.now(),
    name: name,
    completed: false
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  console.log(todos)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: Actions.ADD_TODO, payload: {name:  name}})
    setName('')
  }
  return (
    <div>
      <h1>Todo APP Using React Reducer State Management</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>

      <div className='todos'>
        {todos?.map((todo)=> {
          return <Todo todo={todo} dispatch={dispatch} />
        })}
      </div>
    </div>
  );
}

export default App;
