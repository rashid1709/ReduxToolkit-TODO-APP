import { useState } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  
  return (
    <>
      <h1 className='text-info'>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
