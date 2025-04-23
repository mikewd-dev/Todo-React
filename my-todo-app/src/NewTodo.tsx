import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import AddTodo from './AddTodo';
import './NewTodo.css';
import LeftTodo from './LeftTodo';
import ClearTodo from './ClearComplete';
import ShowTodo from './TodoStatus';

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

  const TodoItem: React.FC<{ todo: Todo; index: number }> = ({ todo, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'TODO',
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'TODO',
      hover: (item: { index: number }) => {
        if (item.index !== index) {
          moveTodo(item.index, index);
          item.index = index;
        }
      },
    });

    

    

    return (
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
        <div className="todoBox">
          <li
            id={`todo-${index}`}
            style={{
              color: todo.completed ? 'grey' : '#ebebeb',
              fontWeight: todo.completed ? 100 : 'normal',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </li>
        </div>
      </section>
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
          .map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index} />
          ))}
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