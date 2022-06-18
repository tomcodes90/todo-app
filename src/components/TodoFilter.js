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
        <span onClick={clearFilteredTodoList}>All</span>
        <span id="active" onClick={() => filterTodoList("to do")}>
          Active
        </span>
        <span id="completed" onClick={() => filterTodoList("completed")}>
          Completed
        </span>
      </div>
      <p className="items-clear" onClick={clearTodoList}>
        Clear Completed
      </p>
    </div>
  );
}

export default TodoFilter;
