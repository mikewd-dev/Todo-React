  import { useState } from 'react';
import './AddTodo.css';

  interface AddTodoProps {
    onAddTodo: (text: string) => void;  // Receive the function as a prop
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
        onAddTodo(todo);  // Add todo
        setTodo('');  // Reset input field
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}  // Handle checkbox change
          />
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}  
            placeholder="Add a new task"
          />
        </form>
      </div>
    );
  };

  export default AddTodo;;