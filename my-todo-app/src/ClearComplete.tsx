import React from "react";
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
    <div className="flex flex-row justify-center items-center">
        <form className='flex flex-end items-center w-[100%] mr-[5px] border-none' onSubmit={handleDelete}>
        <input className="text-[14px] font-normal text-center text-darkGrayishBlue dark:text-lightGrayishBlue" type = 'submit' value = "Clear Completed"/>
        </form>
        </div>
)
}
export default ClearTodo
