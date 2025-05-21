import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './AddTodo.css';
const AddTodo = ({ onAddTodo }) => {
    const [todo, setTodo] = useState('');
    const [typing, setTyping] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [error, setError] = useState('');
    const handleCheckboxChange = () => {
        if (todo.trim() !== '' && !isChecked) {
            onAddTodo(todo);
            setTodo('');
            setIsChecked(false);
            setIsEmpty(false);
            setError('');
        }
        else {
            setError('This field is required');
            setIsEmpty(true);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== '') {
            onAddTodo(todo);
            setTyping('Currently Typing');
            setTodo('');
            setIsEmpty(false);
            setError('');
        }
        else {
            setError('This field is required');
            setIsEmpty(true);
        }
    };
    return (_jsxs("div", { className: 'flex flex-row justify-center items-center w-[90vw] rounded-[5px] h-[50px] bg-light dark:bg-dark gap-4 mt-5', children: [_jsxs("form", { className: `flex flex-row items-center h-[50px] w-[90vw] gap-4 rounded-[5px] text-light-back dark:text-dark-back ${isEmpty ? 'border border-red-500' : ''}`, onSubmit: handleSubmit, children: [_jsx("input", { className: 'appearance-none -webkit-appearance-none -moz-appearance-none border-[1px] border-border-color dark:border-border-color rounded-[50%] h-[20px] w-[20px] ml-[21px] box-border', type: "checkbox", checked: isChecked, onChange: handleCheckboxChange }), _jsx("input", { className: "flex items-center justify-center text-darkGrayishBlue dark:text-lightGrayishBlue w-auto font-normal text-[14px] pl-[5px]", type: "text", value: todo, onChange: (e) => setTodo(e.target.value), placeholder: typing ? typing : "Create a new todo...", onFocus: (e) => setTyping('Currently Typing'), onBlur: (e) => setTyping('') })] }), error && _jsx("p", { className: "flex flex-row font-thin text-[18px] sm:text-[8px] md:text-[14px] text-red-500", children: error })] }));
};
export default AddTodo;
