import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, [])

  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
     {/* Render list of Todo Components here */}
     {state.map((item)=>{
      return <Todo key={item.id} data={item} dispatch={dispatch} /> 
     })}
    </div>
  )
}

export default App;