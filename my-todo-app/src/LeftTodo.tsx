import React from "react";
import { useState } from "react";
import  NewTodo from "./NewTodo";
import './LeftTodo.css'
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface LeftTodoProps {
    todos: Todo[];
}
const LeftTodo: React.FC<LeftTodoProps> = ({leftTodos})=> {
 const leftItems = leftTodos.reduce((count, leftTodo) => !leftTodo.completed ? count + 1 : count, 0);
    
return (
    
    <div className="flex flex-row items-center text-[14px] font-normal text-darkGrayishBlue dark:text-lightGrayishBlue">{`${leftItems} items left`}</div>
    
)
}
export default LeftTodo