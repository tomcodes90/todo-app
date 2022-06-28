import "./StatusAndFilter.css";

import { useTheme } from "../contexts/ThemeContext";
import { useTodoList } from "../contexts/TodoListContext";
function StatusAndFilter() {
  const { theme } = useTheme();
  const { setSelectedFilter, selectedFilter, clearCompleted, todoCounter } =
    useTodoList();
  return (
    <section
      className={theme === "dark" ? "todo-items-info" : "todo-items-info light"}
    >
      <p className="items-left">{todoCounter} items left</p>
      <section className="items-status">
        <button onClick={() => setSelectedFilter("all")}>All</button>
        <button
          className={!selectedFilter ? "active" : ""}
          onClick={() => setSelectedFilter(false)}
        >
          Active
        </button>
        <button
          className={selectedFilter !== "all" && selectedFilter ? "active" : ""}
          onClick={() => setSelectedFilter(true)}
        >
          Completed
        </button>
      </section>
      <section className="items-clear" onClick={clearCompleted}>
        Clear Completed
      </section>
    </section>
  );
}

export default StatusAndFilter;
