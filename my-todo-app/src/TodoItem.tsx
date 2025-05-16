import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { motion } from "framer-motion";
import "./TodoItem.css";

const TodoItem: React.FC<{
  todo: Todo;
  index: number;
  onDelete: (id: number) => void;
  moveTodo: (from: number, to: number) => void;
  strikeThrough: (index: number) => void;
}> = ({ todo, index, onDelete, moveTodo, strikeThrough }) => {
  const [isHovered, setIsHovered] = useState(false); // <--- add this back

  const [{ isDragging }, drag] = useDrag({
    type: "TODO",
    item: { id: todo.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "TODO",
    drop: (item: { id: number; index: number }) => {
      const dragIndex = item.index;
      const dropIndex = index;
      if (dragIndex !== dropIndex) {
        moveTodo(dragIndex, dropIndex);
      }
    },
  });

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 500 }}
      whileDrag={{ scale: 1.05 }}
    >
      <section
        className={`mb-0 mt-0 pb-0 flex items-center w-[90vw] h-[50px] gap-[10px] mx-auto border-b border-border-color box-border dark:text-dark-back text-light-back bg-light dark:bg-dark ${isDragging ? "bg-white/10 shadow-lg opacity-50 cursor-grabbing" : ""}`}
        ref={(node) => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {/* Checkbox input and styled label */}
        <input
          id={`checkbox-${index}`}
          type="checkbox"
          checked={todo.completed}
          onChange={() => strikeThrough(index)}
          className="peer hidden"
        />
        <label
          htmlFor={`checkbox-${index}`}
          className="
            appearance-none ml-[21px] h-[20px] w-[20px] rounded-full border border-[var(--placeholder-color)] 
            flex items-center justify-center cursor-pointer
            peer-checked:bg-gradient-to-r peer-checked:from-[hsl(192,100%,67%)] peer-checked:to-[hsl(280,87%,65%)]
            peer-checked:text-white
            before:content-[''] peer-checked:before:content-['\2713']
            peer-checked:before:text-[12px] peer-checked:before:text-white peer-checked:before:flex peer-checked:before:items-center peer-checked:before:justify-center
            before:h-[20px] before:w-[20px] before:rounded-full
          "
        />

        {/* Todo text and delete button */}
        <div
          className="flex justify-between items-center w-full h-[50px] ml-[10px] pr-4"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li
            className={`todoItem ${
              todo.completed
                ? "line-through text-completed dark:text-dark-completed font-thin"
                : ""
            }`}
          >
            {todo.text}
          </li>
          <button
            onClick={() => onDelete(todo.id)}
            className="deleteTodo"
            style={{ display: isHovered ? "block" : "none" }}
          >
            X
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default TodoItem;
