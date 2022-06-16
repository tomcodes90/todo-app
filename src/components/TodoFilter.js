function TodoFilter({ todoList, filterTodoList, clearTodoList }) {
  return (
    <div className="todo-items-info">
      <div className="items-left">{todoList.length} items left</div>
      <div className="items-status">
        <span id="all" onClick={filterTodoList}>
          All
        </span>
        <span id="active" onClick={filterTodoList}>
          Active
        </span>
        <span id="completed" onClick={filterTodoList}>
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
