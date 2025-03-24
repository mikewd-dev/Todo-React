import { useState } from 'react';
import './NewTodo.css';

  const NewTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);

  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (todo.trim() !== '') {
        setTodos((prevTodos) => [
          ...prevTodos,
          { text: todo, completed: false },  
        ]);
        setTodo('');
      }
    };
    
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => { setTodo(e.target.value); }
    


 const handleDelete=(index:number):void => {(setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index)))
  }

const strikeThrough = (index:number):void => {setTodos((prevTodos) => prevTodos.map((todo, i) => i === index ? {...todo, completed: !todo.completed } : todo
)
);                                             }

  
return(
  <div>
  <form onSubmit={handleSubmit}>
    <input type="text"
      value={todo}
      onChange={handleChange}
    />
  <button className="addTodo" type="submit">Add</button>
  </form>
  <ul>
    {todos.map((todo, index) => (
    <div className="todoList">
    <input type="checkbox"
      checked= {todo.completed}
      onChange={() => strikeThrough(index)}
      />
      <br/>
      <li
        id={`todo-${index}`}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </li>

    </div>
    ))}
    </ul>
  </div>
)

    }
export default NewTodo