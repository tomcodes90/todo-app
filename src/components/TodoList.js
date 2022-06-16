import TodoListItems from "./TodoListItems";
import TodoFilter from "./TodoFilter";

function TodoList({
  checkMark,
  removeIcon,
  changeTodoStatus,
  todoList,
  todoCounter,
  filterTodoList,
  clearTodoList,
  clearFilteredTodoList,
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
        <TodoFilter
          todoCounter={todoList.length}
          todoList={todoList}
          filterTodoList={filterTodoList}
          clearTodoList={clearTodoList}
          clearFilteredTodoList={clearFilteredTodoList}
        />
      </div>
    </div>
  );
}

export default TodoList;
