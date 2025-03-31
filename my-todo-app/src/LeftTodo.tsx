import React from "react";
import { useState } from "react";
import './LeftTodo.css'
interface LeftTodoProps {
    leftTodos: {text: string, completed : boolean}[];
}
const LeftTodo: React.FC<LeftTodoProps> = ({leftTodos})=> {
 const leftItems = leftTodos.reduce((count, leftTodo) => !leftTodo.completed ? count + 1 : count, 0);
    
return (
    <div className="leftTodos">
    <p>{`${leftItems} items left`}</p>
    </div>
)
}
export default LeftTodo