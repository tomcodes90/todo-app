import { useContext } from "react";
import AppContext from "../contexts/AppContext";

function TodoFilter({
  setSelectedFilter,
  selectedFilter,
  clearCompleted,
  todoCounter,
}) {
  const { theme } = useContext(AppContext);
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

export default TodoFilter;
