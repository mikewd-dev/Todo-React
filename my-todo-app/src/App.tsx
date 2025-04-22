;import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import NewTodo from './NewTodo'

function App() {
  return (
    <div className="todoTitle">
      <div className="title">
        <h1>TODO</h1>
        <FontAwesomeIcon icon={faSun} style={{ marginLeft: '10px' }} />
      </div>
      <NewTodo />
    </div>
  )
}

export default App;