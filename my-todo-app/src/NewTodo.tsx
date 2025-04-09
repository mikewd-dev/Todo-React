import { useState } from 'react';
import AddTodo from './AddTodo';
import './NewTodo.css';

  const NewTodo: React.FC = () => {
    const [todos, setTodos] = useState<{text: string; completed: boolean }[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  }


const strikeThrough = (index:number):void => {setTodos((prevTodos) => prevTodos.map((todo, i) => i === index ? {...todo, completed: !todo.completed } : todo
)
);                                             }

  
return(
  <div>
  <AddTodo onAddTodo = {addTodo}/>
      
  <ul>
    {todos.map((todo, index) => (
    <section className="todoList" key={index}>
    <input type="checkbox"
      checked= {todo.completed}
      onChange={() => strikeThrough(index)}
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
    </ul>
  </div>
)

    }
export default NewTodo