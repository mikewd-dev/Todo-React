import { jsx as _jsx } from "react/jsx-runtime";
import './ClearCompleted.css';
const ClearTodo = ({ todos, setTodos }) => {
    const handleDelete = (e) => {
        e.preventDefault();
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };
    return (_jsx("div", { className: "flex flex-row justify-center items-center", children: _jsx("form", { className: "flex flex-end items-center w-[100%] mr-[5px] border-none", onSubmit: handleDelete, children: _jsx("input", { className: "text-[14px] font-normal text-center text-darkGrayishBlue dark:text-lightGrayishBlue", type: "submit", value: "Clear Completed" }) }) }));
};
export default ClearTodo;
