import { createContext, useContext, useState } from "react";
import removeIcon from "../images/icon-cross.svg";

const TodoListContext = createContext({});

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("all");

  function handleAddTodo(todoValue) {
    const todoId = Math.floor(Math.random() * 100000000000);

    if (todoValue !== "") {
      setTodoList([
        ...todoList,
        { id: todoId, value: todoValue, isCompleted: false },
      ]);
    }
  }

  function changeTodoStatus(todoId) {
    const list = todoList.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }

      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      };
    });

    return setTodoList(list);
  }

  function removeTodo(removedTodoId) {
    const filteredTodos = todoList.filter((todo) => todo.id !== removedTodoId);

    setTodoList(filteredTodos);
  }

  function clearCompleted() {
    const activeTodos = todoList.filter((todo) => todo.isCompleted === false);
    setTodoList(activeTodos);
  }

  const todoCounter = todoList.length;

  return (
    <TodoListContext.Provider
      value={{
        todoCounter,
        todoList,
        handleAddTodo,
        clearCompleted,
        setTodoList,
        removeIcon,
        changeTodoStatus,
        removeTodo,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoList = () => {
  const todoListContext = useContext(TodoListContext);
  if (!todoListContext) {
    throw new Error("useTodoList cannot be used outside of the ThemeProvider");
  }
  return todoListContext;
};
