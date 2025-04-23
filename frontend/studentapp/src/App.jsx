import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'
const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'greenyellow',height:'50px',lineHeight:'50px'}}>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App