import TodoListItems from "./TodoListItems";

function TodoList({ checkMark, removeIcon, todoList, removeTodo }) {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        <TodoListItems
          checkMark={checkMark}
          removeIcon={removeIcon}
          todoList={todoList}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default TodoList;
