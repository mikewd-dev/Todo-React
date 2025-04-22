import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import NewTodo from './NewTodo'

const App = () =>{
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {document.body.className = darkMode ? 'darkMode' : ''}, [darkMode])
  return (
    <div className="todoTitle">
      <div className="title">
        <h1>TODO</h1>
        <button onClick={() => setDarkMode(prev => !prev)}><FontAwesomeIcon icon={darkMode? faSun:faMoon} style={{ marginLeft: '10px' }} /></button>
      </div>
      <NewTodo />
    </div>
  
  )
}

export default App;