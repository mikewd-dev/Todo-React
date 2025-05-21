import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }
        else {
            html.classList.remove('dark');
        }
    }, [darkMode]);
    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    return (_jsxs("div", { className: "min-h-screen   relative w-full text-white font-custom-font overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0 bg-back-light dark:bg-back-dark" }), _jsx("div", { className: "absolute inset-0 z-0 h-[185px] top-0 left-0 bg-[][url('/assets/bg-desktop-light.jpg')] dark:bg-[url('/assets/bg-desktop-dark.jpg')] bg-center-center bg-contain bg-cover bg-no-repeat bg-fixed bg-top opacity-90" }), _jsxs("div", { className: "relative z-10 flex flex-col items-center justify-start text-[18px]", children: [_jsxs("div", { className: "flex justify-between items-center mt-[30px] w-[90vw] h-[20px]", children: [_jsx("h1", { className: "font-bold-size tracking-widest", children: "TODO" }), _jsx("button", { onClick: toggleDarkMode, children: _jsx(FontAwesomeIcon, { icon: darkMode ? faSun : faMoon, style: { marginLeft: '10px' } }) })] }), _jsx(DndProvider, { options: HTML5toTouch, children: _jsx(NewTodo, {}) }), _jsx("footer", { className: "mt-8", children: _jsx("p", { className: "text-[14px]", children: "Drag and drop to reorder list" }) })] })] }));
};
export default App;
