import { jsx as _jsx } from "react/jsx-runtime";
import './LeftTodo.css';
const LeftTodo = ({ leftTodos }) => {
    const leftItems = leftTodos.reduce((count, leftTodo) => !leftTodo.completed ? count + 1 : count, 0);
    return (_jsx("div", { className: "flex flex-row items-center text-[14px] font-normal text-darkGrayishBlue dark:text-lightGrayishBlue", children: `${leftItems} items left` }));
};
export default LeftTodo;
