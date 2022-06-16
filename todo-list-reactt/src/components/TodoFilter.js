function TodoFilter({ todoList, clearTodoList }) {
  return (
    <div className="todo-items-info">
      <div className="items-left">{todoList.length} items left</div>
      <div className="items-status">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div className="items-clear">
        <span onClick={clearTodoList}>Clear Completed</span>
      </div>
    </div>
  );
}

export default TodoFilter;
