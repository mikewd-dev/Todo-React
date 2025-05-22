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
            html.classList.add('dark');
          } else {
            html.classList.remove('dark');
          }
        }, [darkMode]);

        const toggleDarkMode = () => setDarkMode((prev) => !prev);

        return (
          <div className="min-h-screen relative w-full text-white font-custom-font overflow-hidden">
            <div className="absolute inset-0 z-0 2xl:bg-back-light dark:bg-back-dark" />
            <div className="absolute inset-0 z-0 h-[185px] top-0 left-0 2xl:bg-[url('/assets/bg-desktop-light.jpg')] dark:bg-[url('/assets/bg-desktop-dark.jpg')] bg-center-center bg-contain bg-cover bg-no-repeat bg-fixed bg-top opacity-90" />
            <div className="relative z-10 flex flex-col items-center justify-start text-[18px]">
            
              <div className="flex justify-between items-center mt-[30px] w-[90vw] h-[20px]">
                <h1 className="font-bold-size tracking-widest">TODO</h1>
                <p>This is to test why there are no changes to netlify</p>
                <button onClick={toggleDarkMode}>
                  <FontAwesomeIcon
                    icon={darkMode ? faSun : faMoon}
                    style={{ marginLeft: '10px' }}
                  />
                </button>
              </div>

              
              <DndProvider options={HTML5toTouch}>
                <NewTodo />
              </DndProvider>

              
              <footer className="mt-8">
                <p className="text-[14px]">Drag and drop to reorder list</p>
              </footer>
            </div>
          </div>
        );
      };

      export default App;