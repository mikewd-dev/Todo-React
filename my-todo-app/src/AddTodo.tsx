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
    <div className='flex flex-row justify-center items-center w-[90vw] rounded-[5px] h-[50px] bg-light dark:bg-dark gap-
  4 mt-5'>
      <form className ='flex flex-row items-center h-[50px] w-[90vw] gap-4 rounded-[5px] text-light-back dark:text-dark-back' onSubmit={handleSubmit}>
        <input className='appearance-none -webkit-appearance-none -moz-appearance-none border-[1px] border-border-color dark:border-border-color rounded-[50%] h-[20px] w-[20px] ml-[21px] box-border'
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange} 
        />
        <input
          className="flex items-center justify-center text-darkGrayishBlue dark:text-lightGrayishBlue w-[100%] font-normal fs-[14px] pl-[5px]"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo..."
        />
      </form>
      </div>
  );
};

export default AddTodo;