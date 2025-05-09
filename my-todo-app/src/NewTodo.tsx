import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import AddTodo from './AddTodo';
import './NewTodo.css';
import LeftTodo from './LeftTodo';
import ClearTodo from './ClearComplete';
import ShowTodo from './TodoStatus';
import { motion } from "framer-motion";
import { button } from 'framer-motion/client';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

  type DeleteTodoProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
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
  }

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
    const[isHovered, setIsHovered] = useState(false)
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
          className="todoList"
          ref={(node) => drag(drop(node))}
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          <input
            className="todoCheck"
            type="checkbox"
            checked={todo.completed}
            onChange={() => strikeThrough(index)}
          />
          <div className="todoBox" onMouseOver={() => setIsHovered(true)}
            onMouseLeave ={ () => setIsHovered(false)}>
            <li
              id={`todo-${index}`}
              className={`todoItem ${todo.completed ? 'completed' : ''}`}
            >
              {todo.text}
            </li>
            <button onClick={() => onDelete(todo.id)} className="deleteTodo" style={{display:isHovered ? 'block':'none'}}>X</button>
          </div>
        </section>
      </motion.div>
    );
  };
  return (
    <div className='added-todos'>
      <AddTodo onAddTodo={addTodo} /> 
      <ul className="listTodos">
        {todos
          .filter((todo) =>
            filter === "all" ||
            (filter === "active" && !todo.completed) ||
            (filter === "completed" && todo.completed)
          )
          .map((todo) => {
            const index = todos.findIndex((t) => t.id === todo.id);
            return <TodoItem key={todo.id} todo={todo} index={index} onDelete={deleteTodo}/>;
          })}
      </ul>
      <div className='bottomMenu'>
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