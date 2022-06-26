import { useTheme } from "../contexts/ThemeContext";
import { useTodoList } from "../contexts/TodoListContext";

function TodoListItem({ Draggable, index, todo }) {
  const { theme } = useTheme();
  const { removeIcon, changeTodoStatus, removeTodo } = useTodoList();
  return (
    <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
      {(provided) => (
        <div
          className={theme === "dark" ? "todo-item" : "todo-item light"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div onClick={() => changeTodoStatus(todo.id)} className="check">
            <div
              className={
                theme === "dark"
                  ? todo.isCompleted === true
                    ? "check-mark-checked"
                    : "check-mark"
                  : todo.isCompleted === true
                  ? "check-mark-checked"
                  : "check-mark light"
              }
            >
              <p className={todo.isCompleted === true ? "mark" : ""}></p>
            </div>
          </div>
          <p
            className={
              theme === "dark"
                ? todo.isCompleted === true
                  ? "todo-text-checked"
                  : "todo-text"
                : todo.isCompleted === true
                ? "todo-text-checked"
                : "todo-text light"
            }
          >
            {todo.value}
          </p>

          <div className="todo-remove">
            <div
              onClick={() => removeTodo(todo.id)}
              className={
                theme === "dark" ? "todo-remove-icon" : "todo-remove-icon light"
              }
            >
              <img src={removeIcon} alt="remove icon" />
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}

export default TodoListItem;
