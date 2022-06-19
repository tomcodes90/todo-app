import TodoListItem from "./TodoListItem";
import TodoFilter from "./TodoFilter";

import { useDrop } from "react-dnd";

function TodoList({
  removeIcon,
  changeTodoStatus,
  todoList,
  setTodoList,
  filterTodoList,
  clearTodoList,
  clearFilteredTodoList,
  removeTodo,
  theme,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (todo) => addImageToBoard(todo.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    const divList = todoList.filter((todo) => id === todo.id);
    setTodoList((todoList) => [...todoList, divList[0]]);
  };
  return (
    <div className="todo-items-wrapper">
      <div ref={drop} className="todo-items">
        {todoList.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              removeIcon={removeIcon}
              changeTodoStatus={changeTodoStatus}
              removeTodo={removeTodo}
              theme={theme}
            />
          );
        })}

        <TodoFilter
          theme={theme}
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
