import React from "react";
import { useState} from "react";
import './ClearCompleted.css'

interface ClearTodoProps{
    todos: {text: string, completed: boolean}[]
    setTodos: React.Dispatch<React.SetStateAction<{ text: string; completed: boolean }[]>>;
}

const ClearTodo: React.FC<ClearTodoProps> =({todos, setTodos}) => {

    const handleDelete = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
      setTodos((prev) => prev.filter((todo)=> !todo.completed))
    }
return (
        <form className='clearCompleted' onSubmit={handleDelete}>
        <input type = 'submit' value = "Clear Completed"/>
        </form>
)
}
export default ClearTodo
