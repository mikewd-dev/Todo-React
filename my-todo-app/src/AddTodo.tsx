import { useState } from 'react';
import './AddTodo.css'
interface AddTodoProps {
  onAddTodo: (text: string) => void;  // Receive the function as a prop
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<string>('');  // Handle the text input
  const [isChecked, setIsChecked] = useState<boolean>(false);  // Track if checkbox is checked
  
  const handleCheckboxChange = () => {
    if (todo.trim() !== '' && !isChecked) {
      onAddTodo(todo);  // Add todo when checkbox is checked
      setTodo('');  // Clear the input field
      setIsChecked(false);  // Uncheck the checkbox
    }
    setIsChecked(!isChecked);  // Toggle checkbox state
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
          className="todoInput"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}  // Handle text input change
          placeholder="Add a new task"
        />

      </form>
    </div>
  );
};

export default AddTodo;