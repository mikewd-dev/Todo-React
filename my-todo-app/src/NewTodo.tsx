import { useState } from 'react';
import AddTodo from './AddTodo';
import './NewTodo.css';
import TodoStats from './StatsTodo';
import LeftTodo from './LeftTodo';
import ClearTodo from './ClearComplete';
import ShowTodo from './TodoStatus';

const NewTodo: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all"); 

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  };

  const strikeThrough = (index: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  

  const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
    setFilter(newFilter);
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
            <section className="todoList" key={index}>
              <input className="todoCheck"
                type="checkbox"
                checked={todo.completed}
                onChange={() => strikeThrough(index)}
              />
              <div className="todoBox">
                <li
                  id={`todo-${index}`}
                  style={{ color: todo.completed ? 'grey' : 'white', fontWeight:todo.completed ? 100 :"normal",textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                  {todo.text}
                </li>
              </div>
            </section>
          
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

