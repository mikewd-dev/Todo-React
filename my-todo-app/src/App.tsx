import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
import './App.css';
import NewTodo from './NewTodo';
import Test from './Test';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="background-light dark: background-dark bg-center bg-no-repeat bg-top bg-fixed bg-cover text-black dark:text-white min-h-screen flex flex-col items-center justify-center w-[90vw] mb-2 mt-2 text-[18px] m-auto m-0">
    <div className="bg-red-500 text-white p-2">Tailwind test</div>
      <div className="flex flex-row justify-between items-center dark:text-[#ffff]">
        <h1 className="text-2xl font-semibold text-[#ffff]">TODO</h1>
        <button
          className="bg-transparent border-0 text-inherit"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            style={{ marginLeft: '10px' }}
          />
        </button>
      </div>
      <DndProvider options={HTML5toTouch}>
        <NewTodo />
        <Test/>
      </DndProvider>
      <footer>
        <p>Drag and drop to reorder list</p>
      </footer>
    </div>

  );
};

export default App;