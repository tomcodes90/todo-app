import { useDrag } from "react-dnd";

function TodoListItem({
  removeIcon,
  changeTodoStatus,
  todo,
  removeTodo,
  theme,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      key={todo.id}
      className={theme === "dark" ? "todo-item" : "todo-item light"}
      style={{ display: isDragging ? "none" : "flex" }}
    >
      <div onClick={() => changeTodoStatus(todo.id)} className="check">
        <div
          className={
            theme === "dark"
              ? todo.status === "completed"
                ? "check-mark-checked"
                : "check-mark"
              : todo.status === "completed"
              ? "check-mark-checked"
              : "check-mark light"
          }
        >
          <p className={todo.status === "completed" ? "mark" : ""}></p>
        </div>
      </div>
      <p
        className={
          theme === "dark"
            ? todo.status === "completed"
              ? "todo-text-checked"
              : "todo-text"
            : todo.status === "completed"
            ? "todo-text-checked"
            : "todo-text light"
        }
      >
        {todo.value}
      </p>
      <div className="todo-remove">
        <div
          className={
            theme === "dark" ? "todo-remove-icon" : "todo-remove-icon light"
          }
        >
          <img
            onClick={() => removeTodo(todo.id)}
            src={removeIcon}
            alt="remove icon"
          />
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
