import { useState } from 'react';
import AddTodo from './AddTodo';
import './NewTodo.css';
import TodoStats from './StatsTodo';
import LeftTodo from './LeftTodo';
const NewTodo: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);  // Add the todo with completed = false
  };

  const strikeThrough = (index: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <AddTodo onAddTodo={addTodo} />  {/* Passing addTodo function to AddTodo */}
      <ul>
        {todos.map((todo, index) => (
          <section className="todoList" key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => strikeThrough(index)}  // Toggle completed state
            />
            <div className="todoBox">
              <li
                id={`todo-${index}`}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </li>
            </div>
          </section>
        ))}
        <LeftTodo leftTodos = {todos}/>
      </ul>
      
    </div>
  );
};

export default NewTodo;