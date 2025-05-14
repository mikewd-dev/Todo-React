import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import AddTodo from './AddTodo';
import './NewTodo.css';
import LeftTodo from './LeftTodo';
import ClearTodo from './ClearComplete';
import ShowTodo from './TodoStatus';
import { motion } from 'framer-motion';

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

  const TodoItem: React.FC<{ todo: Todo; index: number; onDelete: (id: number) => void }> = ({ todo, index, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [{ isDragging }, drag] = useDrag({
      type: 'TODO',
      item: { id: todo.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'TODO',
      drop: (item: { id: number; index: number }) => {
        const dragIndex = item.index;
        const dropIndex = index;
        if (dragIndex !== dropIndex) {
          moveTodo(dragIndex, dropIndex);
        }
      },
    });

    return (
      <div className="flex flex-col justify-between h-full">
        <div className="w-[90vw] mx-auto flex flex-col gap-4 box-border overflow-x-hidden flex-grow">
          <AddTodo onAddTodo={addTodo} />

          <ul className="flex flex-col shadow-md w-full rounded-[5px] overflow-hidden mt-[100px]">
            {todos
              .filter((todo) =>
                filter === 'all' ||
                (filter === 'active' && !todo.completed) ||
                (filter === 'completed' && todo.completed)
              )
              .map((todo) => {
                const index = todos.findIndex((t) => t.id === todo.id);
                return (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onDelete={deleteTodo}
                  />
                );
              })}
          </ul>
        </div>

        {/* Footer for large screens */}
        <div
          className="hidden md:flex flex-row justify-between items-center w-[90vw] mx-auto 
                     bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] 
                     text-light-back dark:text-dark-back h-[50px] px-4"
        >
          <LeftTodo leftTodos={todos} />

          <ShowTodo
            todos={todos}
            filter={filter}
            onFilterChange={handleFilterChange}
          />

          <ClearTodo leftTodos={todos} setTodos={setTodos} />
        </div>

        {/* Footer for small screens (two rows) */}
        <div
          className="flex md:hidden flex-row justify-between items-center w-[90vw] mx-auto 
                     bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] 
                     text-light-back dark:text-dark-back h-[50px] px-4"
        >
          <LeftTodo leftTodos={todos} />
          <ClearTodo leftTodos={todos} setTodos={setTodos} />
        </div>

        <div
          className="flex md:hidden justify-center items-center w-[90vw] mx-auto mt-4 
                     py-3 bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] 
                     text-light-back dark:text-dark-back"
        >
          <ShowTodo
            todos={todos}
            filter={filter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="w-[90vw] mx-auto flex flex-col gap-4 box-border overflow-x-hidden flex-grow">
        <AddTodo onAddTodo={addTodo} />

        <ul className="flex flex-col shadow-md w-full rounded-[5px] overflow-hidden mt-[100px]">
          {todos
            .filter((todo) =>
              filter === 'all' ||
              (filter === 'active' && !todo.completed) ||
              (filter === 'completed' && todo.completed)
            )
            .map((todo) => {
              const index = todos.findIndex((t) => t.id === todo.id);
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  onDelete={deleteTodo}
                />
              );
            })}
        </ul>
      </div>

    <div
      className="hidden lg:flex flex-row justify-between items-center w-[90vw] mx-auto 
                 bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] 
                 text-light-back dark:text-dark-back h-[50px] px-4"
    >
      <LeftTodo leftTodos={todos} />
      <ShowTodo
        todos={todos}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <ClearTodo leftTodos={todos} setTodos={setTodos} />
    </div>

    {/* Footer for small screens (two rows) */}
    <div
      className="flex sm:hidden flex-row justify-between items-center w-[90vw] mx-auto 
                 bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] 
                 text-light-back dark:text-dark-back h-[50px] px-4"
    >
      <LeftTodo leftTodos={todos} />
      <ClearTodo leftTodos={todos} setTodos={setTodos} />
    </div>

    <div
      className="flex sm:hidden justify-center items-center w-[90vw] mx-auto mt-4 
                 py-3 bg-light dark:bg-dark rounded-[5px] border-[var(--placeholder-color)] 
                 text-light-back dark:text-dark-back"
    >
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