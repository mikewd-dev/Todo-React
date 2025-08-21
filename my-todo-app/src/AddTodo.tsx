import { useState } from 'react';
import './AddTodo.css'
interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<string>('');
  const [typing, setTyping] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [error, setError] = useState('');
  const handleCheckboxChange = () => {
    if (todo.trim() !== '' && !isChecked) {
      onAddTodo(todo);
      setTodo('');
      setIsChecked(false);
      setIsEmpty(false)
        setError('');
      } else {
        setError('This field is required');
        setIsEmpty(true);
    }

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      onAddTodo(todo);
      setTyping('Currently Typing')
      setTodo('');
      setIsEmpty(false)
      setError('');
    } else {
      setError('This field is required');
      setIsEmpty(true);
    }
  };



  return (
    <div className='flex flex-row items-center justify-center w-[60vw] w-[60vw] rounded-[5px] h-[50px] bg-light dark:bg-dark gap-4 mt-5'>
      <form className ={`flex flex-col items-center h-[50px] w-[60vw] w-[60vw] gap-4 rounded-[5px] text-light-back dark:text-dark-back ${isEmpty ? 'border border-red-500' : ''}`} 
      onSubmit={handleSubmit}>
        <input className='appearance-none -webkit-appearance-none -moz-appearance-none border-[1px] border-border-color dark:border-border-color rounded-[50%] h-[20px] w-[20px] ml-[21px] box-border'
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange} 
        />
        <input
          className="flex items-center  text-darkGrayishBlue dark:text-lightGrayishBlue w-full font-normal text-[14px] pl-[5px]"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder={typing ? typing : "Create a new todo..."}
          onFocus={(e) => setTyping('Currently Typing')}
          onBlur={(e) => setTyping('')}
        />
      </form>
      {error && <p className="flex flex-row font-thin text-[18px] sm:text-[8px] md:text-[14px] text-red-500">{error}</p>}
      </div>
  );
};

export default AddTodo;