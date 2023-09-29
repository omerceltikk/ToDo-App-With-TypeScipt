import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import SideBar from './components/SideBar'
import TodoArea from './components/TodoArea'

function App() {


  return (
    <>
      <div>
        <AddTodo/>
        <SideBar/>
        <TodoArea/>
      </div>
    </>
  )
}

export default App
