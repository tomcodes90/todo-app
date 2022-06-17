import "./App.css";

import darkBackgroundDesktop from "./images/bg-desktop-dark.jpg";
import sun from "./images/icon-sun.svg";
// import moon from "./images/icon-moon.svg";

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
  const [filteredTodoList, setFilteredTodoList] = useState("");
  const [filtered, setFiltered] = useState(false);
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
  }
  function removeTodo(removedTodoId) {
    const filteredTodos = todoList.filter((todo) => todo.id !== removedTodoId);

    setTodoList(filteredTodos);
  }
  function filterTodoList(status) {
    const filteredTodos = todoList.filter((todo) => todo.status === status);
    setFilteredTodoList(filteredTodos);
    setFiltered(true);
  }
  function clearFilteredTodoList() {
    setFiltered(false);
  }
  function clearTodoList() {
    const filteredTodos = todoList.filter(
      (todo) => todo.status !== "completed"
    );
    setTodoList(filteredTodos);
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
          todoCounter={todoList.length}
          todoList={filtered ? filteredTodoList : todoList}
          removeIcon={removeIcon}
          changeTodoStatus={changeTodoStatus}
          removeTodo={removeTodo}
          filterTodoList={filterTodoList}
          clearTodoList={clearTodoList}
          clearFilteredTodoList={clearFilteredTodoList}
        />
        <TodoFilter
          todoCounter={todoList.length}
          todoList={filtered ? filteredTodoList : todoList}
          filterTodoList={filterTodoList}
          clearTodoList={clearTodoList}
          clearFilteredTodoList={clearFilteredTodoList}
        />
      </div>
      <p className="info"> Drag and drop to reorder list</p>
    </>
  );
}

export default App;
