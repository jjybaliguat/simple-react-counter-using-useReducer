import { useReducer, useState } from 'react';
import './App.css';
import Todo from './Todo';

export const Actions = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action){
  switch(action.type){
    case Actions.ADD_TODO:
      if(action.payload.name === ""){
        return todos
      }
      return [
        addTodo(action.payload.name), ...todos
      ]
    case Actions.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    case Actions.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, completed: !todo.completed}
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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: Actions.ADD_TODO, payload: {name:  name}})
    setName('')
  }
  return (
    <div className='main'>
      <h1 className='title'>Todo App Using React Reducer State Management</h1>
      <p className='title'>This is a simple demo on how to manage state in react using useReducer Hook.</p>
      <div className='main-todo-container'>
        <h1 className='inner-title'>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input placeholder='Type you task here' type='text' value={name} onChange={e => setName(e.target.value)} />
            <button type='submit' className="plus-icon">+</button>
          </div>
        </form>

        <div className='todos'>
          {todos?.map((todo)=> {
            return <Todo todo={todo} dispatch={dispatch} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
