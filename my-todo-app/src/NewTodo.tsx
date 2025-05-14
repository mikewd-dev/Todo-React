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
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500 }}
        whileDrag={{ scale: 1.05 }}
      >
        <section
          className={`mb-0 pb-0 flex items-center w-[90vw] h-[50px] gap-[10px] mx-auto border-b border-border-color box-border dark:text-dark-back text-light-back bg-light dark:bg-dark ${isDragging ? 'bg-white/10 shadow-lg opacity-50 cursor-grabbing' : ''}`}
          ref={(node) => drag(drop(node))}
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => strikeThrough(index)}
            className="peer hidden"
          />
          <label
            htmlFor={`checkbox-${index}`}
            className="appearance-none ml-[21px] h-[20px] w-[20px] rounded-full border border-[var(--placeholder-color)] flex items-center justify-center cursor-pointer
              peer-checked:bg-gradient-to-r peer-checked:from-[hsl(192,100%,67%)] peer-checked:to-[hsl(280,87%,65%)]
              peer-checked:text-white
              before:content-[''] peer-checked:before:content-['\2713']
              peer-checked:before:text-[12px] peer-checked:before:text-white peer-checked:before:flex peer-checked:before:items-center peer-checked:before:justify-center
              before:h-[20px] before:w-[20px] before:rounded-full"
          ></label>
          <div
            className="flex justify-between items-center w-full h-[50px] ml-[10px] pr-4"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <li
              className={`todoItem ${
                todo.completed
                  ? 'line-through text-completed dark:text-dark-completed font-thin'
                  : ''
              }`}
            >
              {todo.text}
            </li>
            <button
              onClick={() => onDelete(todo.id)}
              className="deleteTodo"
              style={{ display: isHovered ? 'block' : 'none' }}
            >
              X
            </button>
          </div>
        </section>
      </motion.div>
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

      <div className="flex justify-evenly items-center w-[90vw] mx-auto bg-light dark:bg-dark rounded-bl-[5px] rounded-br-[5px] dark:rounded-bl-[5px] dark:rounded-br-[5px] border-[var(--placeholder-color)] text-light-back dark:text-dark-back h-[50px]">
        <LeftTodo leftTodos={todos} />
        <ShowTodo
          todos={todos}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
        <ClearTodo leftTodos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default NewTodo;