function TodoFilter({
  todoList,
  filterTodoList,
  clearFilteredTodoList,
  clearTodoList,
  todoCounter,
}) {
  return (
    <div className="todo-items-info">
      <p className="items-left">{todoCounter} items left</p>
      <div className="items-status">
        <span id="all" onClick={clearFilteredTodoList}>
          All
        </span>
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
