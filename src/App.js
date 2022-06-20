import "./App.css";

import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import removeIcon from "./images/icon-cross.svg";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
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

  function selectTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(theme);
  }

  function handleAddTodo(todoValue) {
    const todoId = Math.floor(Math.random() * 100000000000);

    if (todoValue !== "") {
      setTodoList([
        ...todoList,
        { id: todoId, value: todoValue, isCompleted: false },
      ]);
    }
  }
  function changeTodoStatus(completedTodoId) {
    const list = [];
    todoList.forEach((todo) => {
      if (todo.id === completedTodoId) {
        if (!todo.isCompleted) {
          todo.isCompleted = true;
        } else {
          todo.isCompleted = false;
        }
      }
      list.push(todo);
      return setTodoList(list);
    });
  }
  function removeTodo(removedTodoId) {
    const filteredTodos = todoList.filter((todo) => todo.id !== removedTodoId);

    setTodoList(filteredTodos);
  }
  function clearCompleted() {
    const activeTodos = todoList.filter((todo) => todo.isCompleted === false);
    setTodoList(activeTodos);
  }

  return (
    <div className={theme === "dark" ? "main" : "main light"}>
      <div className="container">
        <Header sun={sun} moon={moon} theme={theme} selectTheme={selectTheme} />
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
            theme={theme}
          />
        </div>
        <p className="info"> Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
