import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
import './App.css';
import NewTodo from './NewTodo';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark', darkMode);
    } else {
      html.classList.remove('dark', darkMode);
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="relative w-full min-h-screen text-black dark:text-white font-custom-font overflow-hidden">
      
      {/* Background color layer */}
      <div className="absolute inset-0 z-0 bg-[hsl(210,100%,100%)] dark:bg-[hsl(235,24%,18%)]" />

      {/* Background image layer */}
      <div className="absolute inset-0 z-0 h-[300px] bg-[url('/assets/bg-desktop-light.jpg')] dark:bg-[url('/assets/bg-desktop-dark.jpg')] bg-cover bg-no-repeat bg-fixed bg-top opacity-90" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-[18px]">
        
        {/* Header */}
        <div className="flex justify-between items-center w-[90vw] h-[50px]">
          <h1 className="font-bold-size tracking-widest">TODO</h1>
          <button onClick={toggleDarkMode}>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              style={{ marginLeft: '10px' }}
            />
          </button>
        </div>

        {/* Todo input and list */}
        <DndProvider options={HTML5toTouch}>
          <NewTodo />
        </DndProvider>

        {/* Footer */}
        <footer className="mt-8">
          <p className="text-[14px]">Drag and drop to reorder list</p>
        </footer>
      </div>
    </div>
  );
};

export default App;