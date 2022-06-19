function TodoFilter({
  filterTodoList,
  clearFilteredTodoList,
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
        <p onClick={clearFilteredTodoList}>All</p>
        <p id="active" onClick={() => filterTodoList("to do")}>
          Active
        </p>
        <p id="completed" onClick={() => filterTodoList("completed")}>
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
