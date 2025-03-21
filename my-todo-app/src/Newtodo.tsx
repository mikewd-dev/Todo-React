import { useState } from 'react';


  const NewTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([]);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => { setTodo(e.target.value); }
const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (todo.trim() !== ''){
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo('');
  }

 } 
return(
  <div>
  <form onSubmit={handleSubmit}>
    <input type="text"
      value={todo}
      onChange={handleChange}
    />
  <button type="submit">Add</button>
  </form>
  <ul>
    {todos.map((todo, index) => (
    <div>
    <input type="radio"/>
    <li key={index}>{todo}</li>
    </div>
    ))}
    </ul>
  </div>
)

    }
export default NewTodo