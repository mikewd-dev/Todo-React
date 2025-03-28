import React from "react";
import { useState } from "react";
import './LeftTodo.css'
interface LeftTodoProps {
    leftTodos: {text: string, completed : boolean}[];
}
const LeftTodo: React.FC<LeftTodoProps> = ({leftTodos})=> {
 const leftItems = leftTodos.reduce((count, leftTodo) => !leftTodo.completed ? count + 1 : count, 0);
    
return (
    <p className="leftTodos">{`${leftItems} items left`}</p>
)
}
export default LeftTodo