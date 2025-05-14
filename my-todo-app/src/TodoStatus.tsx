import React from 'react';
import './TodoStatus.css';

interface TodoStatusProps {
  todos: { text: string; completed: boolean }[];
  filter: "all" | "active" | "completed";
  onFilterChange: (newFilter: "all" | "active" | "completed") => void;
}

const TodoStatus: React.FC<TodoStatusProps> = ({ todos, filter, onFilterChange }) => {
  return (
    
    <ul className="flex flex-row items-center pt-0">
      <li
        className={`text-[14px] font-normal cursor-pointer ${
          filter === "all" ? "text-filter-active" : "text-filter hover:text-filter-active"
        }`}
        onClick={() => onFilterChange("all")}
      >
        All
      </li>
      <li
        className={`text-[14px] font-normal pl-[5px] cursor-pointer ${
          filter === "active" ? "text-filter-active" : "text-filter hover:text-filter-active"
        }`}
        onClick={() => onFilterChange("active")}
      >
        Active
      </li>
      <li
        className={`text-[14px] font-normal pl-[5px] cursor-pointer ${
          filter === "completed" ? "text-filter-active" : "text-filter hover:text-filter-active"
        }`}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </li>
    </ul>
    
  );
};

export default TodoStatus;