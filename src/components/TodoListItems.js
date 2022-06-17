function TodoListItems({ removeIcon, changeTodoStatus, todoList, removeTodo }) {
  return todoList.map(
    (todo) => {
      return (
        <div key={todo.id} className="todo-item">
          <div onClick={() => changeTodoStatus(todo.id)} className="check">
            <div
              className={
                todo.status === "completed"
                  ? "check-mark-checked"
                  : "check-mark"
              }
            >
              <p className={todo.status === "completed" ? "mark" : ""}></p>
            </div>
          </div>
          <p
            className={
              todo.status === "completed" ? "todo-text-checked" : "todo-text"
            }
          >
            {todo.value}
          </p>
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
    },
    [todoList]
  );
}

export default TodoListItems;
