import TodoListItems from "./TodoListItems";
import TodoFilter from "./TodoFilter";

function TodoList({
  checkMark,
  removeIcon,
  changeTodoStatus,
  todoList,
  removeTodo,
}) {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        <TodoListItems
          checkMark={checkMark}
          removeIcon={removeIcon}
          changeTodoStatus={changeTodoStatus}
          todoList={todoList}
          removeTodo={removeTodo}
        />
        <TodoFilter todoList={todoList} />
      </div>
    </div>
  );
}

export default TodoList;
