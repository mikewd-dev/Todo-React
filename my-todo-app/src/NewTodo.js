import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import AddTodo from "./AddTodo";
import "./NewTodo.css";
import LeftTodo from "./LeftTodo";
import ClearTodo from "./ClearComplete";
import ShowTodo from "./TodoStatus";
import TodoItem from "./TodoItem";
const NewTodo = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    const strikeThrough = (index) => {
        setTodos((prevTodos) => prevTodos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
    };
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    const moveTodo = (draggedIndex, droppedIndex) => {
        const updatedTodos = [...todos];
        const [movedTodo] = updatedTodos.splice(draggedIndex, 1);
        updatedTodos.splice(droppedIndex, 0, movedTodo);
        setTodos(updatedTodos);
    };
    const filteredTodos = todos.filter((todo) => filter === "all" ||
        (filter === "active" && !todo.completed) ||
        (filter === "completed" && todo.completed));
    return (_jsxs("div", { className: "flex flex-col items-center justify-between h-full", children: [_jsxs("div", { className: "w-[60vw] mx-auto flex flex-col gap-4 box-border overflow-x-hidden", children: [_jsx(AddTodo, { onAddTodo: addTodo }), _jsx("ul", { className: "flex flex-col shadow-md w-full rounded-[5px] overflow-hidden", children: filteredTodos.map((todo, index) => (_jsx(TodoItem, { todo: todo, index: index, onDelete: deleteTodo, moveTodo: moveTodo, strikeThrough: strikeThrough }, todo.id))) })] }), _jsx("div", { className: "mt-[-50px] invisible flex flex-row", children: _jsxs("div", { className: "mt-[50px]  md:visible md:flex flex-row justify-between items-center  w-[60vw] bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back h-[50px] px-4", children: [_jsx(LeftTodo, { leftTodos: todos }), _jsx(ShowTodo, { todos: todos, filter: filter, onFilterChange: handleFilterChange }), _jsx(ClearTodo, { todos: todos, setTodos: setTodos })] }) }), _jsxs("div", { className: "visible md:invisible top-39", children: [_jsxs("div", { className: "mt-[-50px] top-0\n        md:invisible sm:visible flex flex-row justify-between items-center w-[60vw] bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back h-[50px] px-4", children: [_jsx(LeftTodo, { leftTodos: todos }), _jsx(ClearTodo, { todos: todos, setTodos: setTodos })] }), _jsx("div", { className: "md:invisible sm:visible flex flex-row justify-center items-center 2xl:w-[60vw] md:w-[90vw] mx-auto mt-3 py-3 bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back", children: _jsx(ShowTodo, { todos: todos, filter: filter, onFilterChange: handleFilterChange }) })] })] }));
};
export default NewTodo;
