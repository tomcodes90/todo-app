import { useTheme } from "../contexts/ThemeContext";
import { useTodoList } from "../contexts/TodoListContext";

import "./Todo.css";

function Todo({ Draggable, index, todo }) {
  const { theme } = useTheme();
  const { removeIcon, changeTodoStatus, removeTodo } = useTodoList();
  return (
    <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
      {(provided) => (
        <section
          className={theme === "dark" ? "todo-item" : "todo-item light"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <button
            onClick={() => changeTodoStatus(todo.id)}
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
            <figure
              className={todo.isCompleted === true ? "mark" : ""}
            ></figure>
          </button>

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

          <input
            onClick={() => removeTodo(todo.id)}
            className={
              theme === "dark" ? "todo-remove-icon" : "todo-remove-icon light"
            }
            type="image"
            src={removeIcon}
            alt="remove icon"
          />

          {provided.placeholder}
        </section>
      )}
    </Draggable>
  );
}

export default Todo;
