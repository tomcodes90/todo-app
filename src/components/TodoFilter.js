function TodoFilter({
  setSelectedFilter,
  selectedFilter,
  clearTodoList,
  todoCounter,
  theme,
}) {
  return (
    <div
      className={theme === "dark" ? "todo-items-info" : "todo-items-info light"}
    >
      <p className="items-left">{todoCounter} items left</p>
      <div className="items-status">
        <p onClick={() => setSelectedFilter("all")}>All</p>
        <p
          className={selectedFilter === "active" ? "active" : ""}
          onClick={() => setSelectedFilter("active")}
        >
          Active
        </p>
        <p
          className={selectedFilter === "completed" ? "active" : ""}
          onClick={() => setSelectedFilter("completed")}
        >
          Completed
        </p>
      </div>
      <p className="items-clear" onClick={clearTodoList}>
        Clear Completed
      </p>
    </div>
  );
}

export default TodoFilter;
