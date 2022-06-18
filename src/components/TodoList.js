import TodoListItem from "./TodoListItem";
import TodoFilter from "./TodoFilter";

function TodoList({
  removeIcon,
  changeTodoStatus,
  todoList,
  filterTodoList,
  clearTodoList,
  clearFilteredTodoList,
  removeTodo,
}) {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        {todoList.map((todo) => {
          return (
            <TodoListItem
              todo={todo}
              removeIcon={removeIcon}
              changeTodoStatus={changeTodoStatus}
              todoList={todoList}
              removeTodo={removeTodo}
            />
          );
        })}

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
