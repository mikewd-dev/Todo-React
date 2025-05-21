import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './TodoStatus.css';
const TodoStatus = ({ todos, filter, onFilterChange }) => {
    return (_jsxs("ul", { className: "flex flex-row items-center pt-0", children: [_jsx("li", { className: `text-[14px] font-normal cursor-pointer ${filter === "all" ? "text-filter-active" : "text-filter hover:text-filter-active"}`, onClick: () => onFilterChange("all"), children: "All" }), _jsx("li", { className: `text-[14px] font-normal pl-[5px] cursor-pointer ${filter === "active" ? "text-filter-active" : "text-filter hover:text-filter-active"}`, onClick: () => onFilterChange("active"), children: "Active" }), _jsx("li", { className: `text-[14px] font-normal pl-[5px] cursor-pointer ${filter === "completed" ? "text-filter-active" : "text-filter hover:text-filter-active"}`, onClick: () => onFilterChange("completed"), children: "Completed" })] }));
};
export default TodoStatus;
