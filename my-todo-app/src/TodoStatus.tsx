import React from 'react';
import './TodoStatus.css';

interface TodoStatusProps {
  todos: { text: string; completed: boolean }[];
  filter: "all" | "active" | "completed";
  onFilterChange: (newFilter: "all" | "active" | "completed") => void;
}

const TodoStatus: React.FC<TodoStatusProps> = ({ todos, filter, onFilterChange }) => {
  return (
    
<ul className='flex flex-row flex flex-row items-center pt-0'>
  <li
    className={`text-[14px] font-normal ${filter === "all" ? "active" : ""}`}
    onClick={() => onFilterChange("all")}
  >
    All
  </li>
  <li 
    className={`text-[14px] font-normal pl-[5px] ${filter === "active" ? "active" : ""}`}
    onClick={() => onFilterChange("active")}
  >
    Active
  </li>
  <li 
    className={`text-[14px] font-normal pl-[5px] ${filter === "completed" ? "active" : ""}`} 
    onClick={() => onFilterChange("completed")}
  >
    Completed
  </li>
</ul>
    
  );
};

export default TodoStatus;