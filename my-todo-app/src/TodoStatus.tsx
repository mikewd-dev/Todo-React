import React from 'react';
import './TodoStatus.css';

interface TodoStatusProps {
  todos: { text: string; completed: boolean }[];
  filter: "all" | "active" | "completed";
  onFilterChange: (newFilter: "all" | "active" | "completed") => void;
}

const TodoStatus: React.FC<TodoStatusProps> = ({ todos, filter, onFilterChange }) => {
  return (
    <div>
      <ul className='filterMenu'>
        <li 
          className={filter === "all" ? "active" : ""} 
          onClick={() => onFilterChange("all")}
        >
          All
        </li>
        <li 
          className={filter === "active" ? "active" : ""} 
          onClick={() => onFilterChange("active")}
        >
          Active
        </li>
        <li 
          className={filter === "completed" ? "active" : ""} 
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default TodoStatus;