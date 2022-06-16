function TodoFilter({
  todoList,
  filterTodoList,
  clearFilteredTodoList,
  clearTodoList,
  todoCounter,
}) {
  return (
    <div className="todo-items-info">
      <div className="items-left">{todoCounter} items left</div>
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
      <div className="items-clear">
        <span onClick={clearTodoList}>Clear Completed</span>
      </div>
    </div>
  );
}

export default TodoFilter;
