import "./App.css";

import darkBackgroundDesktop from "./images/bg-desktop-dark.jpg";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import checkMark from "./images/icon-check.svg";
import removeIcon from "./images/icon-cross.svg";

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
      status: "to do",
    },
    {
      id: 2,
      value: "Clean the House",
      status: "to do",
    },
  ]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [filters, setFilters] = useState([]);
  function handleAddTodo(todoValue) {
    const todoId = Math.floor(Math.random() * 100000000000);

    if (todoValue !== "") {
      setTodoList([
        ...todoList,
        { id: todoId, value: todoValue, status: "to do" },
      ]);
    }
  }
  function changeTodoStatus(completedTodoId) {
    const list = [];
    todoList.forEach((todo) => {
      if (todo.id === completedTodoId) {
        if (todo.status === "to do") {
          todo.status = "completed";
        } else {
          todo.status = "to do";
        }
      }
      list.push(todo);
      return setTodoList(list);
    });
    console.log(todoList);
    console.log(list);
  }
  function removeTodo(removedTodoId) {
    const filteredTodoList = todoList.filter(
      (todo) => todo.id !== removedTodoId
    );

    setTodoList(filteredTodoList);
  }
  function filterTodoList(e) {
    const name = e.target.id;
    if (name === "all") {
      const allTodos = todoList.filter(
        (todo) => todo.status === "completed" || todo.status === "to do"
      );

      setTodoList(allTodos);
    } else if (name === "active") {
      const activeTodos = todoList.filter((todo) => todo.status === "to do");

      setTodoList(activeTodos);
    } else {
      const completedTodos = todoList.filter(
        (todo) => todo.status === "completed"
      );
      setTodoList(completedTodos);
    }
    console.log(e);
  }

  function clearTodoList() {
    setTodoList([]);
  }

  return (
    <>
      <div className="background-image">
        <img src={darkBackgroundDesktop} alt="background" />
      </div>
      <div className="container">
        <Header sun={sun} />
        <NewTodo onAddTodo={handleAddTodo} />
        <TodoList
          todoList={todoList}
          removeIcon={removeIcon}
          checkMark={checkMark}
          changeTodoStatus={changeTodoStatus}
          removeTodo={removeTodo}
        />
        <TodoFilter
          todoList={todoList}
          filterTodoList={filterTodoList}
          clearTodoList={clearTodoList}
        />
        <p> Drag and drop to reorder list</p>
      </div>
    </>
  );
}

export default App;
