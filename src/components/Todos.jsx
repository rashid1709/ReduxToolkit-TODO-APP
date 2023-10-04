import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos=useSelector(state=>state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todos</h1>
      <div>
       {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button  className='btn btn-primary' onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        </li>
       
       ))}
      </div>
    </div>
  )
}

export default Todos
