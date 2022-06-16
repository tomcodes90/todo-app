function TodoListItems({
  checkMark,
  removeIcon,
  changeTodoStatus,
  todoList,
  removeTodo,
}) {
  return todoList.map((todo) => {
    return (
      <div key={todo.id} className="todo-item">
        <div onClick={() => changeTodoStatus(todo.id)} className="check">
          <div
            className={
              todo.status === "completed" ? "check-mark.checked" : "check-mark"
            }
          >
            <img src={checkMark} alt="check mark" />
          </div>
        </div>
        <div className="todo-text">{todo.value}</div>
        <div className="todo-remove">
          <div className="todo-remove-icon">
            <img
              onClick={() => removeTodo(todo.id)}
              src={removeIcon}
              alt="remove icon"
            />
          </div>
        </div>
      </div>
    );
  });
}

export default TodoListItems;
