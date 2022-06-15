import "./App.css";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      value: "Become a web developer",
    },
    {
      id: 2,
      value: "Clean the House",
    },
  ]);

  function inputHandler(e) {
    e.preventDefault();
    const todoValue = e.target.value;
    const todoId = Math.floor(Math.random() * 100);
    if (todoValue.length > 0) {
      setTodoList([...todoList, { id: todoId, value: todoValue }]);
    }
  }

  const removeTodo = (event) => {
    const removedTodo = event.target.key;

    if (!todoList.key.includes(removedTodo)) {
      return;
    }

    setFilters([...todoList]);
  };

  console.log(todoList);

  return (
    <div className="app">
      <header className="header">
        <h1>Todo</h1>
        <p className="setLight"></p>
      </header>

      <NewTodo inputHandler={inputHandler} />
      <div className="todo_list">
        <TodoList todoList={todoList} removeTodo={removeTodo} />
        <TodoFilter />
      </div>
      <p className="dragdrop">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
