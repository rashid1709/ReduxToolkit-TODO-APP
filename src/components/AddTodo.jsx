import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [input,setInput] = useState([]);
    const dispatch = useDispatch();
    const addTodohandler =(e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput(''); 
    }
  return (
    <div className='container'>
        <h1 className='text-center'>Add Todo</h1>
     <form onSubmit={addTodohandler}>
        <div className='form-group'>
          <input type='text' name='name' placeholder='Enter to do name' className='form-control' value={input} onChange={(e)=>{setInput(e.target.value)}} />
        </div>

          <button className='btn btn-primary mt-2'>Add Todo</button>
        
    
    </form>
        
       
    </div>
  )
}

export default AddTodo
