import { useState } from 'react';
import './AddTodo.css'
interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    if (todo.trim() !== '' && !isChecked) {
      onAddTodo(todo);
      setTodo('');
      setIsChecked(false);
    }

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      onAddTodo(todo); 
      setTodo(''); 
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input className='addtodoCheck'
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange} 
        />
        <input
          className="todoInput"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo"
        />
      </form>
      </div>

  );
};

export default AddTodo;