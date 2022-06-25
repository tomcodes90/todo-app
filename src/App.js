import "./App.css";

import removeIcon from "./images/icon-cross.svg";
import { useTheme, ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      value: "Become a web developer",
      isCompleted: false,
    },
    {
      id: 2,
      value: "Clean the House",
      isCompleted: false,
    },
  ]);

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

  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "main" : "main light"}>
      <div className="container">
        <Header />
        <NewTodo onAddTodo={handleAddTodo} theme={theme} />
        <TodoList
          todoCounter={todoList.length}
          todoList={todoList}
          clearCompleted={clearCompleted}
          setTodoList={setTodoList}
          removeIcon={removeIcon}
          changeTodoStatus={changeTodoStatus}
          removeTodo={removeTodo}
          theme={theme}
        />
        <div className="mobile-todo-info">
          <TodoFilter
            todoCounter={todoList.length}
            todoList={todoList}
            clearCompleted={clearCompleted}
          />
        </div>
        <p className="info"> Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
