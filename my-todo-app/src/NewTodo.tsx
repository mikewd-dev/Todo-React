import { useState } from 'react';
import AddTodo from './AddTodo';
import './NewTodo.css';
import LeftTodo from './LeftTodo';
import ClearTodo from './ClearComplete';
import ShowTodo from './TodoStatus';
import TodoItem from './TodoItem'; 


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const NewTodo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const strikeThrough = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
    setFilter(newFilter);
  };

  const moveTodo = (draggedIndex: number, droppedIndex: number) => {
    const updatedTodos = [...todos];
    const [movedTodo] = updatedTodos.splice(draggedIndex, 1);
    updatedTodos.splice(droppedIndex, 0, movedTodo);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    filter === 'all' ||
    (filter === 'active' && !todo.completed) ||
    (filter === 'completed' && todo.completed)
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="w-[90vw] mx-auto flex flex-col gap-4 box-border overflow-x-hidden flex-grow">
        <AddTodo onAddTodo={addTodo} />

          <ul className="flex flex-col shadow-md w-full rounded-[5px] overflow-hidden">
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              onDelete={deleteTodo}
              moveTodo={moveTodo}
              strikeThrough={strikeThrough}
            />
          ))}
        </ul>
      </div>

      {/* Footer for large screens */}
      <div className="desktop laptop flex flex-row justify-between items-center w-[90vw] mx-auto bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back h-[50px] mt-0 px-4 hidden">
        <LeftTodo leftTodos={todos} />
        <ShowTodo
          todos={todos}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
        <ClearTodo leftTodos={todos} setTodos={setTodos} />
      </div>

      {/* Footer for small screens */}
      <div className="tablet flex flex-row justify-between items-center w-[90vw] mx-auto bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back h-[50px] px-4 lg:hidden ">
        <LeftTodo leftTodos={todos} />
        <ClearTodo leftTodos={todos} setTodos={setTodos} />
      </div>

      <div className="tablet flex flex-row justify-center items-center w-[90vw] mx-auto mt-4 py-3 bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back lg:hidden">
        <ShowTodo
          todos={todos}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default NewTodo;