import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import './App.css';
import NewTodo from './NewTodo';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => { document.body.className = darkMode ? 'darkMode' : ''; }, [darkMode]);

  return (
    <div className="todoTitle">
      <div className="title">
        <h1>TODO</h1>
        <button onClick={() => setDarkMode(prev => !prev)}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} style={{ marginLeft: '10px' }} />
        </button>
      </div>
      <DndProvider options={HTML5toTouch}>
        <NewTodo />
      </DndProvider>
      <footer>
        <p>Drag and drop to reorder list</p>
      </footer>
    </div>
  );
};

export default App;