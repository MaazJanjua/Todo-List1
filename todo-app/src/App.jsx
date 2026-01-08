import React from 'react'
import "./index.css";
//Components Imoprts
import Navbar from "./components/Navbar";
import TodosContent from './components/TodosContent';
const App = () => {
  return (
    <>
      <Navbar />
      <TodosContent/>
    </>
  )
}

export default App
