import React from "react";
import { useState } from "react";
import { Todo } from "./NewTodo";
import './LeftTodo.css'
interface LeftTodoProps {
    leftTodos: Todo[];
}
const LeftTodo: React.FC<LeftTodoProps> = ({leftTodos})=> {
 const leftItems = leftTodos.reduce((count, leftTodo) => !leftTodo.completed ? count + 1 : count, 0);
    
return (
    
    <div className="leftTodos">{`${leftItems} items left`}</div>
    
)
}
export default LeftTodo