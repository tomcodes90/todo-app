import "./StatusAndFilter.css";

import { useTheme } from "../contexts/ThemeContext";
import { useTodoList } from "../contexts/TodoListContext";
function StatusAndFilter() {
  const { theme } = useTheme();
  const { setSelectedFilter, selectedFilter, clearCompleted, todoCounter } =
    useTodoList();
  return (
    <div
      className={theme === "dark" ? "todo-items-info" : "todo-items-info light"}
    >
      <p className="items-left">{todoCounter} items left</p>
      <div className="items-status">
        <p onClick={() => setSelectedFilter("all")}>All</p>
        <p
          className={!selectedFilter ? "active" : ""}
          onClick={() => setSelectedFilter(false)}
        >
          Active
        </p>
        <p
          className={selectedFilter !== "all" && selectedFilter ? "active" : ""}
          onClick={() => setSelectedFilter(true)}
        >
          Completed
        </p>
      </div>
      <p className="items-clear" onClick={clearCompleted}>
        Clear Completed
      </p>
    </div>
  );
}

export default StatusAndFilter;
